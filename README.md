# chesscom-embed

Basically it's a template for adding your chess profile stats to a website

![example](/example.png)

## How To Use
Download src folder and add the following line where you want to insert the frame.

```<iframe src=`src/chessEmbed.html?username=${username}` class="chess"></iframe>```

This is my suggested iframe styling:
```
.chess {
            width: 300px;
            height: calc(125px + 2em);
            border: none;
}
```