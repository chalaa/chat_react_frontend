import React from 'react';
import ChatHeader from './ChatHeader';
import LeftChat from './LeftChat';
import RightChat from './RightChat';
export default function RightComponent() {

    return (
        <div class="col-md-8 col-12 card-stacked">
            <div class="card shadow-line mb-3 chat chat-panel">
                <ChatHeader
                is_right ={true}
                />
                <div class="d-flex flex-row mb-3 navigation-mobile scrollable-chat-panel chat-panel-scroll">
                    <div class="w-100 p-3">
                        <div class="svg36 loader-animate3 horizontal-margin-auto mb-2"></div>
                        <div class="text-center letter-space drop-shadow text-uppercase fs-12 w-100 mb-3">Today</div>
                        <RightChat/>
                        <LeftChat/>
                        <RightChat/>
                        <LeftChat/>
                        <RightChat/>
                        <LeftChat/>
                        <RightChat/>
                        <LeftChat/>
                        <RightChat/>
                        <LeftChat/>
                        <RightChat/>
                        <LeftChat/>
                    </div>
                </div>
            </div>
        </div>
    );

}