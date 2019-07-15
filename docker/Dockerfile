FROM ubuntu:18.04

RUN apt-get update
RUN apt-get -y install python3 python3-pip
RUN pip3 install jupyterlab

RUN useradd jupyter
RUN mkdir ~jupyter
RUN chown jupyter:jupyter ~jupyter


USER jupyter
RUN mkdir ~jupyter/notebooks
WORKDIR /home/jupyter/notebooks