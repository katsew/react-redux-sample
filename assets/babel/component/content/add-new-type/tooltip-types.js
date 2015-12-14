const React = require('react');

const TooltipTypesContent = React.createClass({
  render() {
    return(
      <ul>
        <li>
          <p>login: ログインユーザ情報</p>
          <ul>
            <li>user_id: ユーザID</li>
            <li>created: ログイン日時</li>
          </ul>
        </li>
        <li>
          <p>registration: 新規登録ユーザ情報</p>
          <ul>
            <li>user_id: ユーザID</li>
            <li>created: 登録日時</li>
          </ul>
        </li>
        <li>
          <p>payment: ユーザ課金情報</p>
          <ul>
            <li>user_id: ユーザID</li>
            <li>created: 課金日時</li>
          </ul>
        </li>
        <li>
          <p>event: ゲーム内イベント情報</p>
          <ul>
            <li>user_id: ユーザID</li>
            <li>item_id: イベントアイテム情報(optional)</li>
            <li>created: イベント情報追加日時</li>
          </ul>
        </li>
      </ul>
    )
  }
});

module.exports = TooltipTypesContent;
