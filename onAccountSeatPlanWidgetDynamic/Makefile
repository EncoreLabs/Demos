build:
	docker build -t some-content-nginx .

run:
	make stop && make build && docker run --name some-nginx -d -p 8080:80 some-content-nginx

stop:
	(docker stop some-nginx && docker rm some-nginx) || true

build-and-run: stop build run
