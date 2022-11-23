import React from 'react'

export default function ChatSearch() {
  return (
    <div class="chat-search pl-3 pr-3">
        <div class="input-group">
            <form >
                 <input type="text" class="form-control" placeholder="Search a conversation"/>
            </form>
            <div class="input-group-append prepend-white">
                <span class="input-group-text pl-2 pr-2">
                <i class="fs-17 las la-search drop-shadow"></i>
                </span>
            </div>
        </div>
    </div>
  );
}