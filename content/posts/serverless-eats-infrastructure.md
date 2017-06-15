+++
date = "2017-06-14T16:27:15+10:00"
draft = true
title = "Serverless eats the Infrastructure"
tags = [ "Serverless", "Microservices" ]
category = [ "infrastructure" ]
+++

![serverless](/images/serverless.jpeg)

Last Fall, the Australian census website crashed within hours of launching because of heavy traffic. The following weekend, two university students at a hackathon built an unofficial census website that was able to handle 4x the traffic that had crashed the official site. The kicker here? The [unofficial site][unofficial-link] was built for a grand total of ~$400, about $10 million less than what the Australian government had spent on the official site!
The real story here isn’t about governmental waste. It is about what a small team, in a short time and apparently with little prior knowledge of the cloud could accomplish — provided they had the right infrastructure technology — which in this case was AWS Lambda, Amazon’s server-less offering.

## Enter server-less
The server-less architecture (aka Function-as-a-service or FaaS) is precisely that next-generation infrastructure that we need.
Introduced by Amazon couple of re:Invent’s ago, the server-less architecture allows developers to run back-end code without having to manage their own server systems or server-side applications. Developers can combine their own code with best-in-class services from others to create applications that they could rapidly release and iterate through user testing.

[unofficial-link]:  https://amaysim.com.au