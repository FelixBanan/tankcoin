import React from 'react';
import {connect} from 'react-redux';

import {openModal} from "../../store/router/actions";

import {List, Cell, Avatar, ModalPage, ModalPageHeader, PanelHeaderButton, withPlatform, IOS} from "@vkontakte/vkui";

import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Chevron from '@vkontakte/icons/dist/24/chevron';

const bots = [
    {
        status: 'premium',
        name: 'МС-1',
        avatar: 'https://www.blitzstars.com/api/bs-cache/tank-icons/https%3A%2F%2Fglossary-eu-static.gcdn.co%2Ficons%2Fwotb%2Fcurrent%2Fuploaded%2Fvehicles%2Fhd_thumbnail%2FMS-1.png',
    },
    {
        status: 'premium',
        name: 'Renault FT',
        avatar: 'https://www.blitzstars.com/api/bs-cache/tank-icons/https%3A%2F%2Fglossary-eu-static.gcdn.co%2Ficons%2Fwotb%2Fcurrent%2Fuploaded%2Fvehicles%2Fhd_thumbnail%2FRenaultFT.png',
    },
    {
        name: 'Cruiser Mk. II',
        avatar: 'https://www.blitzstars.com/api/bs-cache/tank-icons/https%3A%2F%2Fglossary-eu-static.gcdn.co%2Ficons%2Fwotb%2Fcurrent%2Fuploaded%2Fvehicles%2Fhd_thumbnail%2FGB69_Cruiser_Mk_II.png',
    },
    {
        name: 'T26',
        avatar: 'https://www.blitzstars.com/api/bs-cache/tank-icons/https%3A%2F%2Fglossary-eu-static.gcdn.co%2Ficons%2Fwotb%2Fcurrent%2Fuploaded%2Fvehicles%2Fhd_thumbnail%2FT-26.png',
    },
    {
        name: 'M2 Light Tank',
        avatar: 'https://www.blitzstars.com/api/bs-cache/tank-icons/https%3A%2F%2Fglossary-eu-static.gcdn.co%2Ficons%2Fwotb%2Fcurrent%2Fuploaded%2Fvehicles%2Fhd_thumbnail%2FM2_lt.png',
    },
    {
        status: 'premium',
        name: 'Leichttraktor',
        avatar: 'https://www.blitzstars.com/api/bs-cache/tank-icons/https%3A%2F%2Fglossary-eu-static.gcdn.co%2Ficons%2Fwotb%2Fcurrent%2Fuploaded%2Fvehicles%2Fhd_thumbnail%2FLtraktor.png',
    },
    {
        name: 'Vickers Mk. F',
        avatar: 'https://www.blitzstars.com/api/bs-cache/tank-icons/https%3A%2F%2Fglossary-eu-static.gcdn.co%2Ficons%2Fwotb%2Fcurrent%2Fuploaded%2Fvehicles%2Fhd_thumbnail%2FF01_Vickers_MkF.png',
    },
    {
        name: 'Vickers Mk. E Type B',
        avatar: 'https://www.blitzstars.com/api/bs-cache/tank-icons/https%3A%2F%2Fglossary-eu-static.gcdn.co%2Ficons%2Fwotb%2Fcurrent%2Fuploaded%2Fvehicles%2Fhd_thumbnail%2FCh07_Vickers_MkE_Type_BT26.png',
    },
];

class HomeBotsListModal extends React.Component {

    render() {
        const {id, onClose, openModal, platform} = this.props;

        return (
            <ModalPage
                id={id}
                header={
                    <ModalPageHeader
                        left={platform !== IOS &&
                        <PanelHeaderButton onClick={onClose}><Icon24Cancel/></PanelHeaderButton>}
                        right={platform === IOS &&
                        <PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
                    >
                        Ангар
                    </ModalPageHeader>
                }
                onClose={onClose}
                settlingHeight={80}
            >
                <List>
                    {bots.map((bot, index) => (
                        <Cell
                            text-color="#528bcc"
                            key={index}
                            description={bot.desc}
                            before={<Avatar size={40} src={bot.avatar}/>}
                            onClick={() => openModal('MODAL_PAGE_BOT_INFO')}
                            asideContent={<Icon24Chevron fill="#528bcc"/>}
                        >
                            {bot.name}
                        </Cell>
                    ))}
                </List>
            </ModalPage>
        );
    }

}

const mapDispatchToProps = {
    openModal
};

export default withPlatform(connect(null, mapDispatchToProps)(HomeBotsListModal));
