build:
	docker build -t orthocal-client .
	touch docker

run:
	docker run -it -p8000:8000 orthocal-client

deploy:
	docker tag orthocal-client:latest gcr.io/orthocal-1d1b9/orthocal-client:latest
	docker push gcr.io/orthocal-1d1b9/orthocal-client:latest
