import {setHeaders} from './../helpers/setHeaders';

export const apiGet = (url) => () => 
                fetch(`${url}`, {
                    method: 'GET',
                    headers: new Headers(setHeaders({ 'Content-type': 'application/json'}))
                }).then(v => v.json())
                .then(r => {
                    if (!r.success) {
                        const errors = r.data ? r.data : r;
                        return Promise.reject(errors);
                    }
                    return r;
                });

export const apiPut = (url, id, obj) => () => 
                fetch(`${url}/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(obj),
                    headers: new Headers(setHeaders({ 'Content-type': 'application/json'}))
                }).then(v => v.json())
                .then(r => {
                    if (!r.success) {
                        const errors = r.data ? r.data : r;
                        return Promise.reject(errors);
                    }
                    return r;
                });

export const apiPost = (url, obj) => () => 
                fetch(`${url}`, {
                    method: 'POST',
                    body: JSON.stringify(obj),
                    headers: new Headers(setHeaders({ 'Content-type': 'application/json'}))
                }).then(v => v.json())
                .then(r => {
                    if (!r.success) {
                        const errors = r.data ? r.data : r;
                        return Promise.reject(errors);
                    }
                    return r;
                });

export const apiDelete = (url, id) => () => 
                fetch(`${url}/${id}`, {
                    method: 'DELETE',
                    headers: new Headers(setHeaders({ 'Content-type': 'application/json'}))
                }).then(v => v.json())
                .then(r => {
                    if (!r.success) {
                        const errors = r.data ? r.data : r;
                        return Promise.reject(errors);
                    }
                    return r;
                });