#!/bin/bash
CWD=`CPWD=$(pwd);cd $(dirname \$0);pwd;cd \$CPWD`
REPO_DIR=`dirname $CWD`
source $REPO_DIR/.env
echo "DROP DATABASE epiqscripts_db; CREATE DATABASE epiqscripts_db;" | docker exec -i "epiqscripts_db_1" mysql -u"epiqscripts_db_usr" -p"epiqscripts_db_pass"
pv $REPO_DIR/dump/epiqscripts.sql | docker exec -i "epiqscripts_db_1" mysql -u"epiqscripts_db_usr" -p"epiqscripts_db_pass" "epiqscripts_db"
