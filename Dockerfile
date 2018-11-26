FROM duluca/minimal-node-build-env:8.11.2 as builder

# project variables
ENV SRC_DIR /usr/src
ENV GIT_REPO https://github.com/icoretchi/auto-stoc.git
ENV SRC_CODE_LOCATION .
ENV BUILD_SCRIPT build:prod

# get source code
RUN mkdir -p $SRC_DIR
WORKDIR $SRC_DIR
RUN git clone $GIT_REPO .
# COPY $SRC_CODE_LOCATION .

RUN npm install
RUN npm run $BUILD_SCRIPT

FROM duluca/minimal-nginx-web-server:1.13.8-alpine
ENV BUILDER_SRC_DIR /usr/src
EXPOSE 80
COPY --from=builder $BUILDER_SRC_DIR/dist /var/www
CMD 'nginx'
