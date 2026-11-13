# Chapter 1

- split fasta into 10 Mb segments
- alignment using Mummer v4
- prepare chain blocks

```python
## test for python code
import os
from tqdm import tqdm

alist = [x for x in os.listdir() if x.endswith(".txt")]
alist.sort()

for x in tqdm(alist):
  print(os.path.getsize(x))


```

## mermaid
```mermaid
grapg TD;
  A --> B;
  A --> D;
  D --> B;

```

