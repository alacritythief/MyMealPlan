FROM python:3.7-alpine
RUN apk add -U --no-cache gcc build-base linux-headers ca-certificates python3 python3-dev libffi-dev libressl-dev
COPY requirements.txt /
RUN pip install -r /requirements.txt
WORKDIR /app
ADD . /app
EXPOSE 80
