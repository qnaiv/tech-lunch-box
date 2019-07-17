@echo off
cd /d %~dp0

call npm run build

cd docs

echo lunchbox.qnv.pw > CNAME

call git add -A
call git commit -m 'deploy'

call git push origin master

cd ..