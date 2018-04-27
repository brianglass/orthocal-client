FROM nginx
COPY *html /usr/share/nginx/html/
COPY *css /usr/share/nginx/html/
COPY dist /usr/share/nginx/html/dist/
