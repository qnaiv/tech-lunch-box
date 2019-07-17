npm run build

cd docs

echo 'lunchbox.qnv.pw' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:qnaiv/tech-lunch-box.git master

cd ..