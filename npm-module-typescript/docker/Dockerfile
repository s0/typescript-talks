FROM ubuntu:18.04

RUN apt-get update
RUN apt-get -y install python3 python3-pip
RUN pip3 install jupyterlab

RUN useradd jupyter
RUN mkdir ~jupyter
RUN chown jupyter:jupyter ~jupyter

USER jupyter
RUN mkdir ~jupyter/notebooks

# Typescript Kernel Stuff
USER root
RUN apt-get -y install nodejs npm
RUN apt-get -y install git
USER jupyter
WORKDIR /home/jupyter
RUN git clone https://github.com/idantene/itypescript.git
WORKDIR /home/jupyter/itypescript
RUN git checkout fix-for-notebook
RUN npm install
RUN npm run tsc
RUN ./bin/itypescript.js --install=local

USER jupyter
WORKDIR /home/jupyter/notebooks