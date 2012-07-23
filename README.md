<h2>HTTP tunnel for node.js</h2>
<h3>
Objective
</h3>
Tunnel arbitrary TCP connections through HTTP.
<h3>
Security
</h3>
Use an SSH tunnel over the HTTP tunnel
<h3>
Forward ports over the HTTP tunnel
</h3>
Use an SSH tunnel over the HTTP tunnel
<h3>
How will it work?
</h3>
By keeping a persistent HTTP connection, and wrapping the data packets in compact JSON. From the outside world, it will look like a very long, slow download.

