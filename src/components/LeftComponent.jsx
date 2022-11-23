import React from 'react';
import ChatHeader from './ChatHeader';
import ChatSearch from './ChatSearch';
import ChatUserPanel from './ChatUserPanel';
export default function LeftComponent() {

    return (
        <div class="col-md-4 col-12 card-stacked">
            <div class="card shadow-line mb-3 chat">
               <ChatHeader 
                 is_right ={false}
               />
               <ChatSearch/>
               <div class="archived-messages d-flex p-3">
                  <div class="w-100">
                    <div class="d-flex pl-0">
                      <div class="d-flex flex-row mt-1">
                        <span class="margin-auto mr-2">
                          <div class="svg15 archived"></div>
                        </span>
                        <p class="margin-auto fw-400 text-dark-75">Archived</p>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chat-user-panel" >
                    <div class="pb-3 d-flex flex-column navigation-mobile pagination-scrool chat-user-scroll">
                        <ChatUserPanel/>
                        <ChatUserPanel/>
                        <ChatUserPanel/>
                        <ChatUserPanel/>
                        <ChatUserPanel/>
                        <ChatUserPanel/>
                        <ChatUserPanel/>
                        <ChatUserPanel/>
                        <ChatUserPanel/>
                        <ChatUserPanel/>
                    </div>
                </div>
            </div>
        </div>
    );

}
