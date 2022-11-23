import React from 'react'

function ChatUserPanel() {
  return (
    // <div class="chat-item active d-flex pl-3 pr-0 pt-3 pb-3">
    //     <div class="w-100">
    //         <div class="d-flex pl-0">
    //             <img class="rounded-circle shadow avatar-sm mr-3" src="https://user-images.githubusercontent.com/35243461/168796877-f6c8819a-5d6e-4b2a-bd56-04963639239b.jpg"/>
    //             <div>
    //             <p class="margin-auto fw-400 text-dark-75">Beate Lemoine</p>
    //                 <div class="d-flex flex-row mt-1">
    //                     <span>
    //                     <div class="svg15 double-check"></div>
    //                     </span>
    //                     <span class="message-shortcut margin-auto fw-400 fs-13 ml-1 mr-4">Hey Quan, If you are free now we can meet tonight ?</span>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="flex-shrink-0 margin-auto pl-2 pr-3">
    //         <div class="d-flex flex-column">
    //             <p class="text-muted text-right fs-13 mb-2">08:21</p>
    //             <span class="round badge badge-light-success margin-auto">2</span>
    //         </div>
    //     </div>
    // </div>
    <div class="chat-item d-flex pl-3 pr-0 pt-3 pb-3">
                      <div class="w-100">
                        <div class="d-flex pl-0">
                          <img class="rounded-circle shadow avatar-sm mr-3" src="https://user-images.githubusercontent.com/35243461/168796884-ee3aafb6-8083-48ec-9cfb-51b95eae08fe.jpg"/>
                          <div>
                            <p class="margin-auto fw-400 text-dark-75">Emily Woods</p>
                            <div class="d-flex flex-row mt-1">
                              <span>
                                <div class="svg15 double-check"></div>
                              </span>
                              <span class="message-shortcut margin-auto text-muted fs-13 ml-1 mr-4">I'm looking forward to it</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex-shrink-0 margin-auto pl-2 pr-3">
                        <div class="d-flex flex-column">
                          <p class="text-muted text-right fs-13 mb-2">08:55</p>
                          <div class="text-right d-flex flex-row">
                            <span>
                              <div class="svg18 pinned"></div>
                            </span>
                            <i class="text-muted la la-angle-down ml-1 fs-15"></i>
                          </div>
                        </div>
                      </div>
                    </div>
  )
}

export default ChatUserPanel