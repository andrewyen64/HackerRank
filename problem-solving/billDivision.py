# Two friends Anna and Brian, are deciding how to split the bill at a dinner. 
# Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. 
# You must determine if his calculation is correct.

#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the bonAppetit function below.
def bonAppetit(bill, k, b):
    x = sum(bill) - bill[k]
    if x/2==b:
        print('Bon Appetit')
    else:
        print(b-(x//2))

if __name__ == '__main__':
    nk = input().rstrip().split()

    n = int(nk[0])

    k = int(nk[1])

    bill = list(map(int, input().rstrip().split()))

    b = int(input().strip())

    bonAppetit(bill, k, b)
