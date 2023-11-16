/* eslint-disable no-unused-vars */
import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export const create = async (gameId,username,text) => {

    const newComment = await request.post(baseUrl, {
        gameId,
        username,
        text
    });
    return newComment
}

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where:`gameId="${gameId}"`
    })
    const allComments = await request.get(`${baseUrl}`)
    return Object.values(allComments)
    .filter(x => x.gameId === gameId);
}