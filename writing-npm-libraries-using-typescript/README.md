This directory contains content used in my OSCON talk
[Writing npm (JavaScript) libraries using TypeScript](https://conferences.oreilly.com/oscon/oscon-or/public/schedule/detail/75953).

Video: https://www.youtube.com/watch?v=m6Jr6w0W1xw

This folder is designed to be used as a Jupyter notebook,
and can also just be followed along using a text editor and terminal.

## Doing the lesson from scratch

If you want to just use your favourite editor and terminal,
just follow the instructions in [Lesson.ipynb](Lesson.ipynb)
(which you can just open and view on GitHub).

## Running the notebook

You can also run the notebook rather than use your own editor & terminal.
Make sure you have the [Bash kernel](https://github.com/takluyver/bash_kernel)
installed along with jupyter.

### Running using docker

For your convinience, Jupyter Lab has been prepared with the required kernels as a docker image.

To get started simply run the following on a machine with `docker` installed:

```
./build-and-run
```

which will build the docker image and start running jupyter locally on port `8888`.
You will need to connect to the URL that gets printed to the console,
which will include a private token that's required to connect.