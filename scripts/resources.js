function checkIntersection (posXPlayer, posYPlayer, widthPlayer, heightPlayer, row, col, widthObstacle, heightObstacle) {
    return posYPlayer + heightPlayer > row * GRID_SIZE &&
    posYPlayer < row * GRID_SIZE  + heightObstacle &&
    posXPlayer + widthPlayer > col * GRID_SIZE  &&
    posXPlayer < col * GRID_SIZE  + widthObstacle;
}
