FROM nginx:stable
COPY *html /usr/share/nginx/html/
COPY *css /usr/share/nginx/html/
COPY dist /usr/share/nginx/html/dist/
COPY nginx /etc/nginx/
RUN gzip --keep /usr/share/nginx/html/dist/*js
