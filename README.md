# imgsearch

Sometimes you need to find a picture real fast.

Let's say someone mentions Richie Rich and you need to find a screenshot.

```
#simpsons richie rich casper
```

![Casper is the ghost of Richie Rich](http://i.imgur.com/JvmO3Bt.jpg)

We want such a search engine, right?!

And, in the spirit of Richie's demise, we want it to be free! Right?!

Okay. Cool. Anyway the point of this is as a demonstration of Elasticsearch's searching features. So, the first thing you need to do is set up Elasticsearch:

1. Install Java: [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html) **Note: You need the JDK for some reason. The JRE isn't enough.**
2. brew update
3. brew install elasticsearch
4. ln -sfv /usr/local/opt/elasticsearch/*.plist ~/Library/LaunchAgents
5. launchctl load ~/Library/LaunchAgents/homebrew.mxcl.elasticsearch.plist **Note: this command can't be run in a tmux session.

After that, we're a regular old Rails project with a Postgres database.
