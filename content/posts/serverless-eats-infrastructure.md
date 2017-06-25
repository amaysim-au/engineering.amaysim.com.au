+++
date = "2017-06-14T16:27:15+10:00"
draft = true
title = "Server-less eats the Infrastructure"
tags = [ "Serverless", "Microservices" ]
category = [ "infrastructure" ]
+++

![serverless](/images/serverless.jpeg)

Last Fall, the Australian census website crashed within hours of launching because of heavy traffic. The following weekend, two university students at a hackathon built an unofficial census website that was able to handle 4x the traffic that had crashed the official site. 
The kicker here? The [unofficial site][unofficial-link] was built for a grand total of ~$400, about $10 million less than what the Australian government had spent on the official site!
The real story here isn’t about governmental waste. It is about what a small team, in a short time and apparently with little prior knowledge of the cloud could accomplish — provided they had the right infrastructure technology — which in this case was AWS Lambda, Amazon’s server-less offering.

## Enter server-less
Some code:

    npm install -g serverless


[unofficial-link]:  https://amaysim.com.au