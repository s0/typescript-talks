FROM ubuntu:18.04

RUN apt-get update
RUN apt-get -y install python3 python3-pip
RUN pip3 install jupyterlab

RUN useradd jupyter
RUN mkdir ~jupyter
RUN chown jupyter:jupyter ~jupyter

USER jupyter
RUN mkdir ~jupyter/notebooks

# Bash Kernel
USER root
RUN pip3 install bash_kernel
RUN python3 -m bash_kernel.install

# Typescript Kernel
USER root
RUN apt-get -y install nodejs npm
RUN apt-get -y install git
RUN npm install -g itypescript
USER jupyter
RUN its --install=local

# Other NPM packages
USER root
RUN npm install -g json

USER jupyter
WORKDIR /home/jupyter/notebooks