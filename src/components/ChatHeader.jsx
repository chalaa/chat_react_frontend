import React from 'react';


export default function ChatHeader(props){

    return(
        <div class="p-3 chat-header">
            <div class="d-flex">
                <div class="w-100 d-flex pl-0">
                    <img class="user-detail-trigger rounded-circle shadow avatar-sm mr-3 chat-profile-picture" src="https://user-images.githubusercontent.com/35243461/168796876-2e363a49-b32c-4218-b5a3-ce12493af69e.jpg" />
                    {props.is_right && <div class="mr-3">
                        <a href="!#">
                          <p class="fw-400 mb-0 text-dark-75">Beate Lemoine</p>
                        </a>
                        <p class="sub-caption text-muted text-small mb-0"><i class="la la-clock mr-1"></i>last seen today at 09:15 PM</p>
                    </div>}
                </div>
                <div class="flex-shrink-0 margin-auto">
                      <a href="#" class="btn btn-sm btn-icon btn-light active text-dark ml-2">
                        <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather">
                          <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                          <polyline points="17 2 12 7 7 2"></polyline>
                        </svg>
                      </a>
                      <a href="#" class="btn btn-sm btn-icon btn-light active text-dark ml-2">
                        <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather">
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </a>
                      <a href="#" class="btn btn-sm btn-icon btn-light active text-dark ml-2">
                        <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </a>
                </div>
            </div>
        </div>
    )
}