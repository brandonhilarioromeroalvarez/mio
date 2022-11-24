export { Graph }

function Graph(v) {
  this.vertices = v
  this.edges = 0
  this.adj = []
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = []
    this.adj[i].push("")
  }
  this.addEdge = addEdge
  this.showGraph = showGraph
  this.isSquare = isSquare
  this.isSymetrical = isSymetrical
  this.dfs = dfs
  this.marked = []
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false
  }
}

function addEdge(v, w) {
  this.adj[v].push(w)
  this.adj[w].push(v)
  this.edges++
}

function showGraph() {
  console.log("Conexiones \n---")
  for (var i = 0; i < this.vertices; ++i) {
    console.log("| " + i)
    for (var j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] != undefined)
        console.log("| " + this.adj[i][j])
    }
    console.log("---")
  }
}

function isSquare() {
  if (this.adj.lenght == this.adj[0].lenght) {
    return true
  }
  else {
    return false
  }
}

function isSymetrical() {
  if (this.isSquare() === true) {
    for (var i = 0; i < this.vertices; ++i) {
      for (var j = 0; j < this.vertices; ++j) {
        if (this.adj[i][j] != this.adj[j][i]) {
          return false
          break
        }
        else
          return true
      }
    }
  }
  return false
}

function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
    console.log("Vertice visitado: " + v);
  }
  for (var w in this.adj[v]+1) {
    if (!this.marked[w]) {
      this.dfs(w);
    }
  }
}