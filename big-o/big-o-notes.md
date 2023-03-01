# Big O
Big O is the way to analyze the efficiency of our code algorithms without getting too much into details. We can model how much time a function took given the $n$ inputs.

The best way to think of $n$ is as the array of the length $n$. We are interested only in the order of magnitude and not the figure.

We shouldn't care of the case holds small differences in execution, such as *100ms* and *130ms* given the $n*10^4$. If the execution of an algorithm takes *130ms* and the other *30s* to complete --- then we should care.

Written in the expression:
- Small differences: $$T(A1) - T(A2) = 300ms - 330ms = -30ms$$
- Big differences: $$T(A1) - T(A2) = 300ms - 30000ms = -29700ms$$

## Big O thinking
**Big O** is a tool that leaves us with only important information to determine how good or bad our algorithm is.

From the pure mathematical perspective, let's create $2x^2 + x + 1$ equation to get the clear picture. If we plug 5 to the $x$, that means that the $2x^2$ will become $50$, $x$ is 5 and $1$ is 1.

If we plugged $3.000.000$, $2x^2$ becomes $18.000.000$ and $x$ becomes $3.000.000$, while $1$ remains 1. This is the huge gap! The Big O for this equation would be $O(n^2)$. $O$ is absorbing everything including the factor. Which means for the $n$ terms, it's going to take us $n^2$ time to go through all of our inputs.