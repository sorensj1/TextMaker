FROM nginx:1.17
COPY ./dist/text-maker/ /var/www/html/app/
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/includes/ /etc/nginx/includes/

CMD ["nginx", "-g", "daemon off;"]