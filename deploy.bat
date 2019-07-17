@echo off
cd /d %~dp0

npm run build

cd docs

echo lunchbox.qnv.pw > CNAME

git add -A
git commit -m 'deploy'

git push origin master

cd ..