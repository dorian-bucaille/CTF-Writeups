result=$(nc ctf10k.root-me.org 8002 | tail -n 2 | head -n 1)

python main.py $result

# enter the result in the terminal

echo $result
