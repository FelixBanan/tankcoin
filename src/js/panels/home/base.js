import React from 'react';
import {connect} from 'react-redux';

import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';

import {Div, Panel, Alert, Group, Button, PanelHeader, CardScroll, Card, Cell} from "@vkontakte/vkui"
import Icon16Fire from '@vkontakte/icons/dist/16/fire';
class HomePanelBase extends React.Component {

    state = {
        showImg: false
    };

    showImg = () => {
        this.setState({showImg: true});
    };

    openPopout() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Нет',
                    autoclose: true,
                    style: 'cancel',
                }, {
                    title: 'Да',
                    autoclose: true,
                    action: this.showImg
                }]}
                onClose={() => this.props.closePopout()}
            >
                <h2>Вопрос значит</h2>
                <p>Вас роняли в детстве?</p>
            </Alert>
        );
    }

    render() {
        const {id, setPage, withoutEpic} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Tanks of Coin</PanelHeader>
                <Group>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => setPage('home', 'groups')}>Список моих
                            групп</Button>
                    </Div>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => this.openPopout()}>Открыть алерт</Button>
                    </Div>
                    <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => this.props.openModal("MODAL_PAGE_BOTS_LIST")}>Открыть
                            модальную страницу</Button>
                    </Div>
                    {withoutEpic && <Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => setPage('modal', 'filters')}>Открыть модальное окно</Button>
                    </Div>}
                    {this.state.showImg && <Div className="div-center">
                        <img src="https://vk.com/sticker/1-12676-256" alt="Стикер VK"/>
                    </Div>}
                </Group>
                <Group separator="hide" description="">
                    <CardScroll>
                        <Card size="m" fill="#ff0000">
                        <Div style={{ width: 170, height: 130 }} >
                            <img width="170" height="100" src="https://seelnk.ru/tanks/chieftainmk6.png"></img>
                            <Cell 
                                asideContent = {<Icon16Fire fill="#ffd700"/>}
                            >
                                Chieftain Mk.6
                            </Cell>
                        </Div>
                        </Card>
                        <Card size="m" fill="#ff0000">
                        <Div style={{ width: 170, height: 130 }} >
                            <img width="170" height="100" src="https://seelnk.ru/tanks/superconqueror.png"></img>
                            <Cell 
                                asideContent = {<Icon16Fire fill="#528bcc"/>}
                            >
                                Super Conqueror
                            </Cell>
                        </Div>
                        </Card>
                        <Card size="m" fill="#ff0000">
                        <Div style={{ width: 170, height: 130 }} >
                            <img width="170" height="100" src="https://seelnk.ru/tanks/is4.png"></img>
                            <Cell 
                                asideContent = {<Icon16Fire />}
                            >
                                ИС-4
                            </Cell>
                        </Div>
                        </Card>
                    </CardScroll>
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);
