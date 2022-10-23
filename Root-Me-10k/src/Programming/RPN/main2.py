import rpn_calc
from pwn import *

p = remote('ctf10k.root-me.org', 8002)

for i in range(100):
    print('l:', p.recvline().decode().strip())
    q = p.recvline().strip().decode()
    print(i, 'question:', q)
    p.recvuntil(b'> ')
    c = rpn_calc.Calculator()
    c.evaluate(q.replace('x', '*'))
    value = c.stack[-1]
    print(i, 'answer  :', value)
    p.sendline(str(value).encode())
    print(i, 'solve   :', p.recvline().decode().strip())

print(p.recvline().decode().strip())