"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _vertex = require("./utilities/vertex");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Vertex = /*#__PURE__*/ function() {
    function Vertex(name, index, visited, immediatePredecessorVertices, immediateSuccessorVertices) {
        _classCallCheck(this, Vertex);
        this.name = name;
        this.index = index;
        this.visited = visited;
        this.immediatePredecessorVertices = immediatePredecessorVertices;
        this.immediateSuccessorVertices = immediateSuccessorVertices;
    }
    _createClass(Vertex, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getIndex",
            value: function getIndex() {
                return this.index;
            }
        },
        {
            key: "isVisited",
            value: function isVisited() {
                return this.visited;
            }
        },
        {
            key: "isStranded",
            value: function isStranded() {
                var immediatePredecessorVerticesLength = this.immediatePredecessorVertices.length, immediateSuccessorVerticesLength = this.immediateSuccessorVertices.length, stranded = immediatePredecessorVerticesLength === 0 && immediateSuccessorVerticesLength === 0;
                return stranded;
            }
        },
        {
            key: "getImmediatePredecessorVertexNames",
            value: function getImmediatePredecessorVertexNames() {
                var immediatePredecessorVertexNames = this.immediatePredecessorVertices.map(function(immediatePredecessorVertex) {
                    var immediatePredecessorVertexName = immediatePredecessorVertex.getName();
                    return immediatePredecessorVertexName;
                });
                return immediatePredecessorVertexNames;
            }
        },
        {
            key: "getImmediateSuccessorVertexNames",
            value: function getImmediateSuccessorVertexNames() {
                var immediateSuccessorVertexNames = this.immediateSuccessorVertices.map(function(immediateSuccessorVertex) {
                    var immediateSuccessorVertexName = immediateSuccessorVertex.getName();
                    return immediateSuccessorVertexName;
                });
                return immediateSuccessorVertexNames;
            }
        },
        {
            key: "getImmediatePredecessorVertices",
            value: function getImmediatePredecessorVertices() {
                return this.immediatePredecessorVertices;
            }
        },
        {
            key: "getImmediateSuccessorVertices",
            value: function getImmediateSuccessorVertices() {
                return this.immediateSuccessorVertices;
            }
        },
        {
            key: "getPredecessorVertexMap",
            value: function getPredecessorVertexMap(param) {
                var predecessorVertexMap = param === void 0 ? {
                } : param;
                this.forEachImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                    var predecessorVertex = immediatePredecessorVertex, predecessorVertexName = predecessorVertex.getName();
                    predecessorVertexMap[predecessorVertexName] = predecessorVertex;
                    predecessorVertex.getPredecessorVertexMap(predecessorVertexMap);
                });
                return predecessorVertexMap;
            }
        },
        {
            key: "getSuccessorVertexMap",
            value: function getSuccessorVertexMap(param) {
                var successorVertexMap = param === void 0 ? {
                } : param;
                this.forEachImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                    var successorVertex = immediateSuccessorVertex, successorVertexName = successorVertex.getName();
                    successorVertexMap[successorVertexName] = successorVertex;
                    successorVertex.getSuccessorVertexMap(successorVertexMap);
                });
                return successorVertexMap;
            }
        },
        {
            key: "getPredecessorVertexNames",
            value: function getPredecessorVertexNames() {
                var predecessorVertices = this.getPredecessorVertices(), predecessorVertexNames = predecessorVertices.map(function(predecessorVertex) {
                    var predecessorVertexName = predecessorVertex.getName();
                    return predecessorVertexName;
                });
                return predecessorVertexNames;
            }
        },
        {
            key: "getSuccessorVertexNames",
            value: function getSuccessorVertexNames() {
                var successorVertices = this.getSuccessorVertices(), successorVertexNames = successorVertices.map(function(successorVertex) {
                    var successorVertexName = successorVertex.getName();
                    return successorVertexName;
                });
                return successorVertexNames;
            }
        },
        {
            key: "getPredecessorVertices",
            value: function getPredecessorVertices() {
                var predecessorVertexMap = this.getPredecessorVertexMap(), predecessorVertexNames = Object.keys(predecessorVertexMap), predecessorVertices = predecessorVertexNames.map(function(predecessorVertexName) {
                    var predecessorVertex = predecessorVertexMap[predecessorVertexName];
                    return predecessorVertex;
                });
                return predecessorVertices;
            }
        },
        {
            key: "getSuccessorVertices",
            value: function getSuccessorVertices() {
                var successorVertexMap = this.getSuccessorVertexMap(), successorVertexNames = Object.keys(successorVertexMap), successorVertices = successorVertexNames.map(function(successorVertexName) {
                    var successorVertex = successorVertexMap[successorVertexName];
                    return successorVertex;
                });
                return successorVertices;
            }
        },
        {
            key: "getOrderedPredecessorVertexNames",
            value: function getOrderedPredecessorVertexNames() {
                var predecessorVertices = this.getPredecessorVertices();
                (0, _vertex).orderVertices(predecessorVertices);
                var orderedPredecessorVertices = predecessorVertices, orderedPredecessorVertexNames = (0, _vertex).vertexNamesFromVertices(orderedPredecessorVertices);
                return orderedPredecessorVertexNames;
            }
        },
        {
            key: "retrieveForwardsAffectedVertices",
            value: function retrieveForwardsAffectedVertices(sourceVertex) {
                var forwardsAffectedVertices = this.forwardsDepthFirstSearch(function(visitedVertex) {
                    var terminate = visitedVertex === sourceVertex;
                    if (terminate) {
                        return true;
                    }
                });
                return forwardsAffectedVertices;
            }
        },
        {
            key: "retrieveBackwardsAffectedVertices",
            value: function retrieveBackwardsAffectedVertices() {
                var backwardsAffectedVertices = this.backwardsDepthFirstSearch(function(visitedVertex) {
                    var terminate = false;
                    if (terminate) {
                        return true;
                    }
                });
                return backwardsAffectedVertices;
            }
        },
        {
            key: "isVertexImmediatePredecessorVertex",
            value: function isVertexImmediatePredecessorVertex(vertex) {
                var vertexImmediatePredecessorVertex = this.immediatePredecessorVertices.includes(vertex);
                return vertexImmediatePredecessorVertex;
            }
        },
        {
            key: "isVertexImmediateSuccessorVertex",
            value: function isVertexImmediateSuccessorVertex(vertex) {
                var vertexImmediateSuccessorVertex = this.immediateSuccessorVertices.includes(vertex);
                return vertexImmediateSuccessorVertex;
            }
        },
        {
            key: "isEdgePresentBySourceVertex",
            value: function isEdgePresentBySourceVertex(sourceVertex) {
                var sourceVertexImmediatePredecessorVertex = this.isVertexImmediatePredecessorVertex(sourceVertex), edgePresent = sourceVertexImmediatePredecessorVertex; ///
                return edgePresent;
            }
        },
        {
            key: "isEdgePresentByTargetVertex",
            value: function isEdgePresentByTargetVertex(targetVertex) {
                var targetVertexImmediateSuccessorVertex = this.isVertexImmediateSuccessorVertex(targetVertex), edgePresent = targetVertexImmediateSuccessorVertex; ///
                return edgePresent;
            }
        },
        {
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setIndex",
            value: function setIndex(index) {
                this.index = index;
            }
        },
        {
            key: "setVisited",
            value: function setVisited(visited) {
                this.visited = visited;
            }
        },
        {
            key: "decrementIndex",
            value: function decrementIndex() {
                this.index--;
            }
        },
        {
            key: "removeImmediatePredecessorVertex",
            value: function removeImmediatePredecessorVertex(immediatePredecessorVertex) {
                var index = this.immediatePredecessorVertices.indexOf(immediatePredecessorVertex), start = index, deleteCount = 1;
                this.immediatePredecessorVertices.splice(start, deleteCount);
            }
        },
        {
            key: "removeImmediateSuccessorVertex",
            value: function removeImmediateSuccessorVertex(immediateSuccessorVertex) {
                var index = this.immediateSuccessorVertices.indexOf(immediateSuccessorVertex), start = index, deleteCount = 1;
                this.immediateSuccessorVertices.splice(start, deleteCount);
            }
        },
        {
            key: "removeIncomingEdges",
            value: function removeIncomingEdges() {
                var immediateSuccessorVertex = this; ///
                this.immediatePredecessorVertices.forEach(function(immediatePredecessorVertex) {
                    return immediatePredecessorVertex.removeImmediateSuccessorVertex(immediateSuccessorVertex);
                });
                this.immediatePredecessorVertices = [];
            }
        },
        {
            key: "removeOutgoingEdges",
            value: function removeOutgoingEdges() {
                var immediatePredecessorVertex = this; ///
                this.immediateSuccessorVertices.forEach(function(immediateSuccessorVertex) {
                    return immediateSuccessorVertex.removeImmediateSuccessorVertex(immediatePredecessorVertex);
                });
                this.immediateSuccessorVertices = [];
            }
        },
        {
            key: "addImmediatePredecessorVertex",
            value: function addImmediatePredecessorVertex(immediatePredecessorVertex) {
                this.immediatePredecessorVertices.push(immediatePredecessorVertex);
            }
        },
        {
            key: "addImmediateSuccessorVertex",
            value: function addImmediateSuccessorVertex(immediateSuccessorVertex) {
                this.immediateSuccessorVertices.push(immediateSuccessorVertex);
            }
        },
        {
            key: "forwardsDepthFirstSearch",
            value: function forwardsDepthFirstSearch(callback) {
                var visitedVertices = [];
                this.retrieveForwardsVisitedVertices(function(visitedVertex) {
                    var terminate = callback(visitedVertex); ///
                    visitedVertices.push(visitedVertex);
                    return terminate;
                });
                visitedVertices.forEach(function(visitedVertex) {
                    return visitedVertex.resetVisited();
                });
                return visitedVertices;
            }
        },
        {
            key: "backwardsDepthFirstSearch",
            value: function backwardsDepthFirstSearch(callback) {
                var visitedVertices = [];
                this.retrieveBackwardsVisitedVertices(function(visitedVertex) {
                    var terminate = callback(visitedVertex); ///
                    visitedVertices.push(visitedVertex);
                    return terminate;
                });
                visitedVertices.forEach(function(visitedVertex) {
                    return visitedVertex.resetVisited();
                });
                return visitedVertices;
            }
        },
        {
            key: "retrieveForwardsVisitedVertices",
            value: function retrieveForwardsVisitedVertices(callback) {
                var terminate = false;
                if (this.visited === false) {
                    this.visited = true;
                    var visitedVertex = this; ///
                    terminate = callback(visitedVertex);
                    if (terminate !== true) {
                        visitedVertex.someImmediateSuccessorVertex(function(immediateSuccessorVertex) {
                            terminate = immediateSuccessorVertex.retrieveForwardsVisitedVertices(callback);
                            if (terminate) {
                                return true;
                            }
                        });
                    }
                }
                return terminate;
            }
        },
        {
            key: "retrieveBackwardsVisitedVertices",
            value: function retrieveBackwardsVisitedVertices(callback) {
                var terminate = false;
                if (this.visited === false) {
                    this.visited = true;
                    var visitedVertex = this; ///
                    terminate = callback(visitedVertex);
                    if (terminate !== true) {
                        visitedVertex.someImmediatePredecessorVertex(function(immediatePredecessorVertex) {
                            terminate = immediatePredecessorVertex.retrieveBackwardsVisitedVertices(callback);
                            if (terminate) {
                                return true;
                            }
                        });
                    }
                }
                return terminate;
            }
        },
        {
            key: "forEachImmediatePredecessorVertex",
            value: function forEachImmediatePredecessorVertex(callback) {
                this.immediatePredecessorVertices.forEach(callback);
            }
        },
        {
            key: "forEachImmediateSuccessorVertex",
            value: function forEachImmediateSuccessorVertex(callback) {
                this.immediateSuccessorVertices.forEach(callback);
            }
        },
        {
            key: "someImmediatePredecessorVertex",
            value: function someImmediatePredecessorVertex(callback) {
                this.immediatePredecessorVertices.some(callback);
            }
        },
        {
            key: "someImmediateSuccessorVertex",
            value: function someImmediateSuccessorVertex(callback) {
                this.immediateSuccessorVertices.some(callback);
            }
        },
        {
            key: "resetVisited",
            value: function resetVisited() {
                this.visited = false;
            }
        }
    ], [
        {
            key: "fromNameAndIndex",
            value: function fromNameAndIndex(name, index) {
                var visited = false, immediatePredecessorVertices = [], immediateSuccessorVertices = [], dependencyVertex = new Vertex(name, index, visited, immediatePredecessorVertices, immediateSuccessorVertices);
                return dependencyVertex;
            }
        }
    ]);
    return Vertex;
}();
exports.default = Vertex;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0ZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlcnRleE5hbWVzRnJvbVZlcnRpY2VzLCBvcmRlclZlcnRpY2VzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmRleCwgdmlzaXRlZCwgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcywgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcyA9IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXM7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcyA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBpc1Zpc2l0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRlZDtcbiAgfVxuXG4gIGlzU3RyYW5kZWQoKSB7XG4gICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9IHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXNMZW5ndGggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICBzdHJhbmRlZCA9ICgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlc0xlbmd0aCA9PT0gMCkgJiYgKGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzTGVuZ3RoID09PSAwKSk7XG5cbiAgICByZXR1cm4gc3RyYW5kZWQ7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleE5hbWVzKCkge1xuICAgIGNvbnN0IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMubWFwKChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMubWFwKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleE5hbWUgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4TmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXhOYW1lcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAocHJlZGVjZXNzb3JWZXJ0ZXhNYXAgPSB7fSkge1xuICAgIHRoaXMuZm9yRWFjaEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXggPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCwgLy8vXG4gICAgICAgICAgICBwcmVkZWNlc3NvclZlcnRleE5hbWUgPSBwcmVkZWNlc3NvclZlcnRleC5nZXROYW1lKCk7XG5cbiAgICAgIHByZWRlY2Vzc29yVmVydGV4TWFwW3ByZWRlY2Vzc29yVmVydGV4TmFtZV0gPSBwcmVkZWNlc3NvclZlcnRleDtcblxuICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhNYXAocHJlZGVjZXNzb3JWZXJ0ZXhNYXApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGV4TWFwKHN1Y2Nlc3NvclZlcnRleE1hcCA9IHt9KSB7XG4gICAgdGhpcy5mb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleCA9IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCwgLy8vXG4gICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gc3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgc3VjY2Vzc29yVmVydGV4TWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdID0gc3VjY2Vzc29yVmVydGV4O1xuXG4gICAgICBzdWNjZXNzb3JWZXJ0ZXguZ2V0U3VjY2Vzc29yVmVydGV4TWFwKHN1Y2Nlc3NvclZlcnRleE1hcCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TWFwO1xuICB9XG5cbiAgZ2V0UHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRpY2VzKCksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcyA9IHByZWRlY2Vzc29yVmVydGljZXMubWFwKChwcmVkZWNlc3NvclZlcnRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lID0gcHJlZGVjZXNzb3JWZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBzdWNjZXNzb3JWZXJ0aWNlcyA9IHRoaXMuZ2V0U3VjY2Vzc29yVmVydGljZXMoKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOYW1lcyA9IHN1Y2Nlc3NvclZlcnRpY2VzLm1hcCgoc3VjY2Vzc29yVmVydGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gc3VjY2Vzc29yVmVydGV4LmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleE5hbWU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cblxuICBnZXRQcmVkZWNlc3NvclZlcnRpY2VzKCkge1xuICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4TWFwID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRleE1hcCgpLFxuICAgICAgICAgIHByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSBPYmplY3Qua2V5cyhwcmVkZWNlc3NvclZlcnRleE1hcCksXG4gICAgICAgICAgcHJlZGVjZXNzb3JWZXJ0aWNlcyA9IHByZWRlY2Vzc29yVmVydGV4TmFtZXMubWFwKChwcmVkZWNlc3NvclZlcnRleE5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZWRlY2Vzc29yVmVydGV4ID0gcHJlZGVjZXNzb3JWZXJ0ZXhNYXBbcHJlZGVjZXNzb3JWZXJ0ZXhOYW1lXTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGV4O1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByZWRlY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhNYXAgPSB0aGlzLmdldFN1Y2Nlc3NvclZlcnRleE1hcCgpLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5hbWVzID0gT2JqZWN0LmtleXMoc3VjY2Vzc29yVmVydGV4TWFwKSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IHN1Y2Nlc3NvclZlcnRleE5hbWVzLm1hcCgoc3VjY2Vzc29yVmVydGV4TmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4ID0gc3VjY2Vzc29yVmVydGV4TWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdO1xuICBcbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzb3JWZXJ0ZXg7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRPcmRlcmVkUHJlZGVjZXNzb3JWZXJ0ZXhOYW1lcygpIHtcbiAgICBjb25zdCBwcmVkZWNlc3NvclZlcnRpY2VzID0gdGhpcy5nZXRQcmVkZWNlc3NvclZlcnRpY2VzKCk7XG5cbiAgICBvcmRlclZlcnRpY2VzKHByZWRlY2Vzc29yVmVydGljZXMpO1xuXG4gICAgY29uc3Qgb3JkZXJlZFByZWRlY2Vzc29yVmVydGljZXMgPSBwcmVkZWNlc3NvclZlcnRpY2VzLCAgLy8vXG4gICAgICAgICAgb3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXMgPSB2ZXJ0ZXhOYW1lc0Zyb21WZXJ0aWNlcyhvcmRlcmVkUHJlZGVjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gb3JkZXJlZFByZWRlY2Vzc29yVmVydGV4TmFtZXM7XG4gIH1cbiAgXG4gIHJldHJpZXZlRm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzKHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IGZvcndhcmRzQWZmZWN0ZWRWZXJ0aWNlcyA9IHRoaXMuZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKCh2aXNpdGVkVmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtaW5hdGUgPSAodmlzaXRlZFZlcnRleCA9PT0gc291cmNlVmVydGV4KTtcbiAgICAgIFxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZm9yd2FyZHNBZmZlY3RlZFZlcnRpY2VzO1xuICB9XG5cbiAgcmV0cmlldmVCYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzKCkge1xuICAgIGNvbnN0IGJhY2t3YXJkc0FmZmVjdGVkVmVydGljZXMgPSB0aGlzLmJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBiYWNrd2FyZHNBZmZlY3RlZFZlcnRpY2VzO1xuICB9XG4gIFxuICBpc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHZlcnRleCkge1xuICAgIGNvbnN0IHZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXg7XG4gIH1cblxuICBpc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmluY2x1ZGVzKHZlcnRleCk7XG5cbiAgICByZXR1cm4gdmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4O1xuICB9XG5cbiAgaXNFZGdlUHJlc2VudEJ5U291cmNlVmVydGV4KHNvdXJjZVZlcnRleCkge1xuICAgIGNvbnN0IHNvdXJjZVZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KHNvdXJjZVZlcnRleCksXG4gICAgICAgICAgZWRnZVByZXNlbnQgPSBzb3VyY2VWZXJ0ZXhJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleDsgLy8vXG5cbiAgICByZXR1cm4gZWRnZVByZXNlbnQ7XG4gIH1cblxuICBpc0VkZ2VQcmVzZW50QnlUYXJnZXRWZXJ0ZXgodGFyZ2V0VmVydGV4KSB7XG4gICAgY29uc3QgdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4ID0gdGhpcy5pc1ZlcnRleEltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCh0YXJnZXRWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2VQcmVzZW50ID0gdGFyZ2V0VmVydGV4SW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4OyAvLy9cblxuICAgIHJldHVybiBlZGdlUHJlc2VudDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldFZpc2l0ZWQodmlzaXRlZCkge1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gIH1cblxuICBkZWNyZW1lbnRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4LS07XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLmluZGV4T2YoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLmluZGV4T2YoaW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuICBcbiAgcmVtb3ZlSW5jb21pbmdFZGdlcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXggPSB0aGlzOyAvLy9cbiAgICBcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuZm9yRWFjaCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4LnJlbW92ZUltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpKTtcblxuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcyA9IFtdO1xuICB9XG5cbiAgcmVtb3ZlT3V0Z29pbmdFZGdlcygpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleC5yZW1vdmVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpKTtcblxuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMgPSBbXTtcbiAgfVxuXG4gIGFkZEltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KGltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGV4KSB7XG4gICAgdGhpcy5pbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzLnB1c2goaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgYWRkSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRleCkge1xuICAgIHRoaXMuaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMucHVzaChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpO1xuICB9XG5cbiAgZm9yd2FyZHNEZXB0aEZpcnN0U2VhcmNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdmlzaXRlZFZlcnRpY2VzID0gW107XG5cbiAgICB0aGlzLnJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgpOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWRWZXJ0aWNlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgdmlzaXRlZFZlcnRpY2VzLmZvckVhY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHZpc2l0ZWRWZXJ0ZXgucmVzZXRWaXNpdGVkKCkpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0aWNlcztcbiAgfVxuXG4gIGJhY2t3YXJkc0RlcHRoRmlyc3RTZWFyY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCB2aXNpdGVkVmVydGljZXMgPSBbXTtcblxuICAgIHRoaXMucmV0cmlldmVCYWNrd2FyZHNWaXNpdGVkVmVydGljZXMoKHZpc2l0ZWRWZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmF0ZSA9IGNhbGxiYWNrKHZpc2l0ZWRWZXJ0ZXgpOyAgLy8vXG5cbiAgICAgIHZpc2l0ZWRWZXJ0aWNlcy5wdXNoKHZpc2l0ZWRWZXJ0ZXgpO1xuXG4gICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgIH0pO1xuXG4gICAgdmlzaXRlZFZlcnRpY2VzLmZvckVhY2goKHZpc2l0ZWRWZXJ0ZXgpID0+IHZpc2l0ZWRWZXJ0ZXgucmVzZXRWaXNpdGVkKCkpO1xuXG4gICAgcmV0dXJuIHZpc2l0ZWRWZXJ0aWNlcztcbiAgfVxuXG4gIHJldHJpZXZlRm9yd2FyZHNWaXNpdGVkVmVydGljZXMoY2FsbGJhY2spIHtcbiAgICBsZXQgdGVybWluYXRlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy52aXNpdGVkID09PSBmYWxzZSkge1xuICAgICAgdGhpcy52aXNpdGVkID0gdHJ1ZTtcblxuICAgICAgY29uc3QgdmlzaXRlZFZlcnRleCA9IHRoaXM7ICAvLy9cblxuICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sodmlzaXRlZFZlcnRleCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hdGUgIT09IHRydWUpIHtcbiAgICAgICAgdmlzaXRlZFZlcnRleC5zb21lSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KChpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBpbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgucmV0cmlldmVGb3J3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhjYWxsYmFjayk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gIH1cblxuICByZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhjYWxsYmFjaykge1xuICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnZpc2l0ZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgICBjb25zdCB2aXNpdGVkVmVydGV4ID0gdGhpczsgIC8vL1xuXG4gICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayh2aXNpdGVkVmVydGV4KTtcblxuICAgICAgaWYgKHRlcm1pbmF0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICB2aXNpdGVkVmVydGV4LnNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleCgoaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgpID0+IHtcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleC5yZXRyaWV2ZUJhY2t3YXJkc1Zpc2l0ZWRWZXJ0aWNlcyhjYWxsYmFjayk7XG5cbiAgICAgICAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVByZWRlY2Vzc29yVmVydGljZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoSW1tZWRpYXRlU3VjY2Vzc29yVmVydGV4KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbW1lZGlhdGVTdWNjZXNzb3JWZXJ0aWNlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRleChjYWxsYmFjaykge1xuICAgIHRoaXMuaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcy5zb21lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNvbWVJbW1lZGlhdGVTdWNjZXNzb3JWZXJ0ZXgoY2FsbGJhY2spIHtcbiAgICB0aGlzLmltbWVkaWF0ZVN1Y2Nlc3NvclZlcnRpY2VzLnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVzZXRWaXNpdGVkKCkge1xuICAgIHRoaXMudmlzaXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kSW5kZXgobmFtZSwgaW5kZXgpIHtcbiAgICBjb25zdCB2aXNpdGVkID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBpbW1lZGlhdGVQcmVkZWNlc3NvclZlcnRpY2VzID0gW10sXG4gICAgICAgICAgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMgPSBbXSxcbiAgICAgICAgICBkZXBlbmRlbmN5VmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBpbmRleCwgdmlzaXRlZCwgaW1tZWRpYXRlUHJlZGVjZXNzb3JWZXJ0aWNlcywgaW1tZWRpYXRlU3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgcmV0dXJuIGRlcGVuZGVuY3lWZXJ0ZXg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUUyQyxHQUFvQixDQUFwQixPQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEQsTUFBTTthQUFOLE1BQU0sQ0FDYixJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSwwQkFBMEI7OEJBRHZFLE1BQU07YUFFbEIsSUFBSSxHQUFHLElBQUk7YUFDWCxLQUFLLEdB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