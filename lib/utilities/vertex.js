"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.vertexNamesFromVertices = vertexNamesFromVertices;
exports.orderVertices = orderVertices;
function vertexNamesFromVertices(vertices) {
    var vertexNames = vertices.map(function(vertex) {
        var vertexName = vertex.getName();
        return vertexName;
    });
    return vertexNames;
}
function orderVertices(vertices) {
    vertices.sort(function(firstVertex, secondVertex) {
        var firstVertexIndex = firstVertex.getIndex(), secondVertexIndex = secondVertex.getIndex();
        if (false) {
        ///
        } else if (firstVertexIndex < secondVertexIndex) {
            return -1;
        } else if (firstVertexIndex > secondVertexIndex) {
            return +1;
        }
    });
    var orderedVertices = vertices; ///
    return orderedVertices;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVydGV4TmFtZXNGcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgY29uc3QgdmVydGV4TmFtZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleE5hbWUgPSB2ZXJ0ZXguZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIHZlcnRleE5hbWU7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0ZXhOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyVmVydGljZXModmVydGljZXMpIHsgIC8vL1xuICB2ZXJ0aWNlcy5zb3J0KChmaXJzdFZlcnRleCwgc2Vjb25kVmVydGV4KSA9PiB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXhJbmRleCA9IGZpcnN0VmVydGV4LmdldEluZGV4KCksXG4gICAgICAgICAgc2Vjb25kVmVydGV4SW5kZXggPSBzZWNvbmRWZXJ0ZXguZ2V0SW5kZXgoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChmaXJzdFZlcnRleEluZGV4IDwgc2Vjb25kVmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgIGlmIChmaXJzdFZlcnRleEluZGV4ID4gc2Vjb25kVmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiArMTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG9yZGVyZWRWZXJ0aWNlcyA9IHZlcnRpY2VzOyAgLy8vXG5cbiAgcmV0dXJuIG9yZGVyZWRWZXJ0aWNlcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBRUksdUJBQXVCLEdBQXZCLHVCQUF1QjtRQVV2QixhQUFhLEdBQWIsYUFBYTtTQVZiLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pELEdBQUssQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsVUFBRSxNQUFNLEVBQUssQ0FBQztRQUM1QyxHQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPO2VBRTFCLFVBQVU7SUFDbkIsQ0FBQztXQUVNLFdBQVc7QUFDcEIsQ0FBQztTQUVlLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QyxRQUFRLENBQUMsSUFBSSxVQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUssQ0FBQztRQUM1QyxHQUFLLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFFBQVEsSUFDdkMsaUJBQWlCLEdBQUcsWUFBWSxDQUFDLFFBQVE7UUFFL0MsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ1YsRUFBRyxBQUFILENBQUc7UUFDTCxDQUFDLE1BQU0sRUFBRSxFQUFFLGdCQUFnQixHQUFHLGlCQUFpQixFQUFFLENBQUM7b0JBQ3hDLENBQUM7UUFDWCxDQUFDLE1BQU8sRUFBRSxFQUFFLGdCQUFnQixHQUFHLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pDLENBQUM7UUFDWCxDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztXQUUvQixlQUFlO0FBQ3hCLENBQUMifQ==