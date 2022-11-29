import React from 'react'

export default function RightChat() {
  return (
    <div class="d-flex flex-row-reverse mb-2">
        <div class="right-chat-message fs-13 mb-2">
        <div class="mb-0 mr-3 pr-4">
            <div class="d-flex flex-row">
            <div class="pr-2">Hey, Beate</div>
            <div class="pr-4"></div>
            </div>
        </div>
        <div class="message-options dark">
            <div class="message-time">
            <div class="d-flex flex-row">
                <div class="mr-2">06:49</div>
                <div class="svg15 double-check"></div>
            </div>
            </div>
            <div class="message-arrow"><i class="text-muted la la-angle-down fs-17"></i></div>
        </div>
        </div>
        </div>
  )
}

