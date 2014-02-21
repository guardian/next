sub vcl_miss {

    set bereq.url = regsub(req.url, "^", "/aws-frontend-next-alpha/PROD/frontend-next-alpha");

    if (req.url !~ "\.(html|png|svg|css|js|jpeg|jpg|ico|xml)$") {
        set bereq.url = bereq.url "index.html";
    }

    set req.http.X-GU-s3url = bereq.url;
}

sub vcl_deliver {

    # allows you to get at debug info
    if (req.http.X-GU-DevDebug ~ "true"){
        set resp.http.X-GU-s3url = req.http.X-GU-s3url;
    }
}
