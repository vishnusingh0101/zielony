server {
    listen 80;
    server_name zielonyapc.com www.zielonyapc.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;

        # Add Content Security Policy (CSP)
        add_header Content-Security-Policy "
            default-src 'self';
            script-src 'self' https://kit.fontawesome.com https://unpkg.com 'unsafe-inline' 'unsafe-eval';
            style-src 'self' https: 'unsafe-inline';
            img-src 'self' data: https://d2tkmgv9tsam7v.cloudfront.net;
            font-src 'self' https: data:;
            connect-src 'self' https://ka-f.fontawesome.com;
            frame-ancestors 'self';
            object-src 'none';
            upgrade-insecure-requests;
        ";
    }

    error_page 502 /error502.html;
}

server {
    listen 443 ssl;
    server_name zielonyapc.com www.zielonyapc.com;

    ssl_certificate /etc/letsencrypt/live/zielonyapc.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/zielonyapc.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Real-IP $remote_addr;
    }
}

server {
    listen 80;
    server_name zielonyapc.com www.zielonyapc.com;
    return 301 https://$host$request_uri;
}
