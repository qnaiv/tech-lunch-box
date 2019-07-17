@echo off
cd /d %~dp0


cd docs

echo 'lunchbox.qnv.pw' > CNAME

git add -A
git commit -m 'deploy'

git push origin master

cd ..