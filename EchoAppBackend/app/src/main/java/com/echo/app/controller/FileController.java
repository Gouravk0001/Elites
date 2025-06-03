package com.echo.app.controller;

import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.mongodb.client.gridfs.model.GridFSFile;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;
import org.apache.commons.io.IOUtils;

@RestController
public class FileController {
    @Autowired private GridFsTemplate gridFsTemplate;

    @GetMapping("/api/files/{id}")
    public void getFileById(@PathVariable String id, HttpServletResponse response) throws IOException {
        GridFSFile file = gridFsTemplate.findOne(query(where("_id").is(new ObjectId(id))));
        if (file == null) {
            response.setStatus(javax.servlet.http.HttpServletResponse.SC_NOT_FOUND);
            return;
        }
        InputStreamResource resource = new InputStreamResource(gridFsTemplate.getResource(file).getInputStream());
        response.setContentType(file.getMetadata().getString("_contentType"));
        response.setHeader("Content-Disposition", "inline; filename=\"" + file.getFilename() + "\"");
        IOUtils.copy(resource.getInputStream(), response.getOutputStream());
        response.flushBuffer();
    }
}