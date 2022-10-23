# Program to compute the result of an RPN expression
import os
import sys

# main function
if __name__ == "__main__":
    # create an empty stack
    stack = []
    # read the expression
    # expr = sys.argv[1:]

    os.system('nc ctf10k.root-me.org 8002 > expr.txt')

    # read the expression from the last line of a file
    expr = open("expr.txt").readlines()[-2].split()
    print(expr)
    # concatenate the expression
    expr = " ".join(expr)
    # split the expression into tokens
    tokens = expr.split()
    # process each token
    for token in tokens:
        # if the token is a number, push it onto the stack
        if token.isdigit():
            stack.append(int(token))
        # if the token is an operator, pop the top two numbers from the stack,
        # apply the operator, and push the result onto the stack
        elif token in "+-x/":
            num2 = stack.pop()
            num1 = stack.pop()
            if token == "+":
                result = num1 + num2
            elif token == "-":
                result = num1 - num2
            elif token == "x":
                result = num1 * num2
            elif token == "/":
                result = num1 / num2
            stack.append(result)
        # if the token is not a number or an operator, print an error message
        else:
            print("Error: invalid token", token)
    # if the stack contains exactly one number, print the result
    if len(stack) == 1:
        print("Result:", stack[0])
        os.system(f"echo {str(stack[0])}")
    # otherwise, print an error message
    else:
        print("Error: invalid expression")