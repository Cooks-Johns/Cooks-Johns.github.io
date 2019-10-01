document.addEventListener("DOMContentLoaded", function() {

   // Then get its webviews
   let webviews = document.querySelectorAll(".TeamView webview");

   // Fetch our CSS in parallel ahead of time
   const cssPath = 'https://cdn.rawgit.com/widget-/slack-black-theme/master/custom.css';
   let cssPromise = fetch(cssPath).then(response => response.text());

   let customCustomCSS = `
   :root {
      /* Modify these to change your theme colors: */
      --primary: #09F;
      --text: #CCC;
      --background: #080808;
      --background-elevated: #222;
   }
   `

   // Insert a style tag into the wrapper view
   cssPromise.then(css => {
      let s = document.createElement('style');
      s.type = 'text/css';
      s.innerHTML = css + customCustomCSS;
      document.head.appendChild(s);
   });

   // Wait for each webview to load
   webviews.forEach(webview => {
      webview.addEventListener('ipc-message', message => {
         if (message.channel == 'didFinishLoading')
            // Finally add the CSS into the webview
            cssPromise.then(css => {
               let script = `
                     let s = document.createElement('style');
                     s.type = 'text/css';
                     s.id = 'slack-custom-css';
                     s.innerHTML = \`${css + customCustomCSS}\`;
                     document.head.appendChild(s);
                     `
               webview.executeJavaScript(script);
            })
      });
   });
});






———————————————>     If you really want to go ham

Adding Your Own Themes
If you don’t like the look of it, you can edit the CSS with any styles you want. 
All this code does is load custom styles from https://cdn.rawgit.com/widget-/slack-black-theme/master/custom.css; 
you can download that file, edit it with your changes, and replace the URL with your own code. Save, relaunch Slack, 
and your changes will be visible. If you don’t know CSS, or just want to make a minor change, there are four color 
variables defined before loading the CSS, so you can just edit those with your own colors.


———————————————>  


/*
Copyright 2017 Bryan Keller (https://github.com/widget-)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

:root {
   /* Modify these to change your theme colors: */
   --primary: #09F;
   --text: #DDD;
   --background: #111;
   --background-elevated: #222;

   /* These should be less important: */
   --background-hover: rgba(255, 255, 255, 0.1);
   --background-light: #AAA;
   --background-bright: #FFF;

   --border-dim: #666;
   --border-bright: var(--primary);

   --text-bright: #FFF;
   --text-special: var(--primary);

   --scrollbar-background: #000;
   --scrollbar-border: var(--primary);
}

h1, h2, h3, h4 {
  color: var(--text);
}

.popover_mask {
   background-color: rgba(0, 0, 0, 0.3);
}

/* Team Picker */
.TeamSidebar, .TeamSidebar .StoplightContainer, .TeamSidebar .TeamSidebar-addArea {
   background-color: var(--background) !important;
   box-shadow: var(--background) 1px 1px 25px;
   color: var(--text);
   z-index: 1;
}


/* Channel selector */
/*.TeamSidebar, .TeamSidebar .StoplightContainer, .TeamSidebar .TeamSidebar-addArea {*/
/*nav.p-channel_sidebar {*/
div.client_channels_list_container {
   background-color: var(--background-elevated) !important;
   box-shadow: var(--background-elevated) 1px 1px 25px;
   color: var(--text);
   z-index: 1;
}

nav.p-channel_sidebar {
   background-color: var(--background-elevated);
   color: var(--text);
}

#team_menu,
body:not(.loading) #team_menu:hover,
body:not(.loading) #team_menu:active {
   background-color: var(--background-elevated) !important;
}

.p-channel_sidebar__channel,
.p-channel_sidebar__link,
.p-channel_sidebar__channel:link,
.p-channel_sidebar__link:link,
.p-channel_sidebar__channel:visited,
.p-channel_sidebar__link:visited,
.p-channel_sidebar__channel:hover,
.p-channel_sidebar__link:hover {
   color: var(--text) !important;
}

/* Channel with unread messages */
.p-channel_sidebar__channel--unread:not(.p-channel_sidebar__channel--muted):not(.p-channel_sidebar__channel--selected) .p-channel_sidebar__name,
.p-channel_sidebar__link--unread:not(.p-channel_sidebar__link--selected) .p-channel_sidebar__name,
.p-channel_sidebar__link--invites:not(.p-channel_sidebar__link--dim) .p-channel_sidebar__name,
.p-channel_sidebar__section_heading_label--clickable:hover,
.p-channel_sidebar__quickswitcher:hover {
   color: var(--text-bright) !important;
}

/*broken*/
__TODO-highlight-indicator {
   background-color: var(--border-bright) !important;
   opacity: 1;
}

#msgs_scroller_div::-webkit-scrollbar-track, .client_container,
#search_terms, #footer, ts-message, .channel_header, ts-jumper ts-jumper-container,
ts-jumper input[type="text"],
.supports_custom_scrollbar:not(.slim_scrollbar) #col_channels:hover #channels_scroller::-webkit-scrollbar-track,
#channel_header_info, #channel_topic_text, #channel_topic_text code, #edit_topic_inner:before {
  background: var(--background) !important;
}

.channel_header, #col_messages, #footer {
   box-shadow: none;
}

/* channel list */
.p-channel_sidebar__channel,
.p-channel_sidebar__link {
  border-radius: 0 15px 15px 0;
  height: 24px !important;
}

.p-channel_sidebar__channel a {
  color: var(--text);
}

.p-channel_sidebar__static_list div {
   margin-right: 2px;
   height: 24px !important;
}

.p-channel_sidebar__channel--selected,
.p-channel_sidebar__link--selected,
.p-channel_sidebar__channel--selected:link,
.p-channel_sidebar__link--selected:link,
.p-channel_sidebar__channel--selected:visited,
.p-channel_sidebar__link--selected:visited,
.p-channel_sidebar__channel--selected:hover,
.p-channel_sidebar__link--selected:hover {
   background-color: var(--background) !important;
   border: solid var(--border-bright);
   border-width: 1px 1px 1px 0;
}

.p-channel_sidebar__channel:hover,
.p-channel_sidebar__link:hover{
   background-color: var(--background-hover) !important;
   border-color: transparent;
   color: var(--text) !important;
   height: 24px !important;
}

.p-channel_sidebar__close_container {
   background: none !important;
}

.p-channel_sidebar__channel--selected:hover,
.p-channel_sidebar__link--selected:hover {
   border: solid var(--border-dim);
   border-width: 1px 1px 1px 0;
}

/*broken*/
li.active[class] span,
#channels_scroller.show_which_channel_is_active[class] ul li.active .primary_action .prefix,
#channels_scroller.show_which_channel_is_active[class] ul li.active .primary_action,
#channels_scroller.show_which_channel_is_active[class] ul li.active .primary_action.im_name > *:not(.unread_highlights) {
   color: var(--text-special) !important;
   background-color: transparent;
   opacity: 1;
}

/*"more unreads" bottom*/
.p-channel_sidebar__banner--top {
   background-color: var(--background);
   border: 1px solid var(--border-bright);
   border-top: none;
   border-radius: 0 0 15px 15px;
}

/*"more unreads" bottom */
.p-channel_sidebar__banner--bottom {
   background-color: var(--background);
   border: 1px solid var(--border-bright);
   border-bottom: none;
   border-radius: 15px 15px 0 0;
}

/*"unread mentions"*/
.p-channel_sidebar__badge,
.p-channel_sidebar__banner--mentions {
   /*inverted because important*/
   background-color: var(--border-bright) !important;
   border-color: var(--text-bright);
   color: var(--text-bright);
}

/*also add border to unread count for individual channels*/
.p-channel_sidebar__badge {
   border: 1px solid;
}

/* new scrollbar */
.p-channel_sidebar div.c-custom_scrollbar__thumb_vertical, .p-channel_sidebar div.c-scrollbar__bar {
  background: var(--background-elevated);
  border: 1px solid var(--scrollbar-border);
}

#channels_scroller.show_which_channel_is_active[class] li.active .presence.active i.presence_icon,
#channels_scroller.show_which_channel_is_active[class] li.active .slackbot_icon,
#channels_scroller.show_which_channel_is_active[class] li.active .presence.away i.presence_icon {
  color: inherit !important;
}

#client_body::before, #client_body:not(.onboarding):before {
  border-bottom: 1px solid var(--border-dim) !important;
  background: var(--background);
  box-shadow: none;
}

#client_body, #messages_container.has_top_messages_banner:before {
   background: var(--background) !important;
}

ts-message, .channel_title .channel_name, ts-jumper input[type="text"],
ts-jumper ol li .member_real_name, ts-jumper ol li .view_name, ts-jumper ol li .channel_name {
  color: var(--text) !important;
}

.light_theme ts-message .message_content a.message_sender, #msg_input::-webkit-input-placeholder,
ts-jumper input[type="text"]::-webkit-input-placeholder {
  color: var(--text) !important;
}

#msg_input, #primary_file_button {
  background: transparent !important;
  color: var(--text) !important;
  border-color: var(--border-dim) !important;
}

.day_divider .day_divider_label,
#convo_container .convo_flexpane_divider .reply_count {
  color: var(--text) !important;
  background-color: var(--background) !important;
  border: 1px solid var(--border-bright) !important;
  border-radius: 1rem;
}

.mention_day_container_div .day_divider .day_divider_label {
   border: 1px solid var(--border-dim) !important;
}

#convo_container .convo_flexpane_divider .reply_count {
   border-radius: 10px;
   padding: 0px 10px;
}

.mention_day_container_div .day_divider:before {
   background-color: transparent !important;
   border-color: var(--border-dim);
}

.day_container .day_msgs {
  border-top: 1px solid var(--border-bright) !important;
  padding-right: 10px;
  padding-left: 2px;
}

textarea, input[type="text"], #file_comment_textarea {
   background-color: var(--background) !important;
   border-color: var(--border-dim) !important;
   color: var(--text) !important;
}
textarea:focus, input[type="text"]:focus, #file_comment_textarea {
   border-color: var(--border-bright) !important;
   color: var(--text-bright) !important;
}

ts-message {
   border-radius: 5px;
   margin: 1px 5px !important;
   box-shadow: none !important;
}

ts-message:hover {
   background: var(--background-hover) !important;
}

#messages_container::after {
   background: none !important;
}

.bot_label {
   padding: 0 4px !important;
   border-radius: 3px !important;
   background: var(--background) !important;
   border: 1px solid var(--border-bright);
}


.file_container:after{
   background-image: -webkit-linear-gradient(top,rgba(255,255,255,0) 0,#333 100%) !important;
}

.rxn,
#col_channels,
#col_channels_footer,
pre,
ts-message .action_hover_container .btn_msg_action,
.file_container,
.file_container .CodeMirror .CodeMirror-code>div:before, .file_container .CodeMirror .sssh-line:before, .file_container .sssh-code .CodeMirror-code>div:before, .file_container .sssh-code .sssh-line:before,
#col_flex,
.search_message_result,
.search_result_with_extract,
#search_filters a,
.menu,
.menu #menu_items_scroller,
.btn, .btn_outline {
  background: var(--background-elevated) !important;
}


#flex_contents .heading,
#flex_contents .heading a,
#flex_contents .heading_text,
#flex_contents .subheading {
   background: var(--background) !important;
   color: var(--text) !important;
   border-color: var(--border-dim);
}

pre,
ts-message .action_hover_container .btn_msg_action,
.file_container .CodeMirror .CodeMirror-code>div pre, .file_container .CodeMirror .sssh-line pre, .file_container .sssh-code .CodeMirror-code>div pre, .file_container .sssh-code .sssh-line pre,
.search_message_result .search_message_result_meta a,
.search_message_result .search_message_result_meta .date_links a,
.flexpane_redesign #flex_contents .heading_text,
#flex_contents .subheading,
#search_filters.files #filter_files, #search_filters.messages #filter_messages,
.menu ul li a,
.btn, .btn_outline, .menu {
  color: var(--text) !important;
  border-color: var(--border-dim) !important;
}

.btn:hover:after {
   border-color: var(--border-bright);
}

.action_hover_container {
  border: 1px solid var(--border-dim) !important;
}
.ts_tip_float.btn_msg_action:not(:last-child) {
  border-right: 1px solid var(--border-dim) !important;
}
.ts_tip_float.btn_msg_action:hover {
  background-color: var(--background) !important;
}

#quick_switcher_btn{
  /*border-top-color: #333 !important;*/
  background-color: transparent;

}

.rxn,
.search_result_with_extract,
.flexbox_client.flexpane_redesign.flex_pane_showing #col_flex,
.flexpane_redesign #flex_contents .heading,
#flex_contents .subheading,
.search_segmented_control,
.menu{
 border-color: var(--border-dim) !important;
}

.search_result_with_extract {
  box-shadow: 0 1px 10px var(--background-elevated) !important;
}

.ql-placeholder {
   color: var(--text);
}

.ql-container.texty_single_line_input {
  background-color: var(--background-elevated);
  color: var(--text);
}

.ql-container .ql-editor p {
  color: var(--text);
}

#quick_switcher_btn:active, #quick_switcher_btn:focus, #quick_switcher_btn:hover {
   background-color: var(--background-elevated);
   border-color: var(--background-elevated);
}

.feature_name_tagging_client ts-message .mention, ts-message .mention,
span.match {
  border: 1px solid var(--border-bright) !important;
  background-color: var(--background-elevated) !important;
  font-weight: bold;
  padding: 2px 4px;
  margin: 2px;
  border-radius: 10px;
}

.mention > .mention {
   /* I'm assuming this is a Slack bug */
   border: none;
}

.mention_rxn {
   border-radius: 5px;
   margin: 1px 5px;
}

.mention_rxn .mention_rxn_summary .app_preview_link,
.mention_rxn .mention_rxn_summary .member_preview_link,
.mention_rxn .mention_rxn_summary .mention_rxn_summary_members {
   color: var(--text);
}

#member_mentions h3 a {
   color: var(--text-special);
}

pre.special_formatting{
  background: var(--background-elevated) !important;
}

code {
  color: var(--text-special) !important;
  background-color: var(--background-elevated) !important;
  border-color: var(--border-dim) !important;
}

.supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-thumb,
.supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-thumb,
.supports_custom_scrollbar:not(.slim_scrollbar) #col_channels:hover #channels_scroller::-webkit-scrollbar-thumb {
   /* scrollbar draggy bit */
  color: transparent !important;
  border: 1px solid var(--scrollbar-border) !important;
  background-color: transparent !important;
}
.supports_custom_scrollbar:not(.slim_scrollbar) #archive_msgs_scroller_div::-webkit-scrollbar-track,
.supports_custom_scrollbar:not(.slim_scrollbar) #msgs_scroller_div::-webkit-scrollbar-track,
.supports_custom_scrollbar:not(.slim_scrollbar) #col_channels:hover #channels_scroller::-webkit-scrollbar-track {
   /* scrollbar endcaps */
  color: transparent !important;
  border: 1px solid var(--border-dim) !important;
  background-color: transparent !important;
}

a, a:link, a:visited{
  color: var(--text-special);
}
ts-message a .mention{
  color: var(--text-special) !important;
}
a:hover{
  color: var(--text-special) !important;
}

#msgs_scroller_div #end_display_div p {
  color: var(--text);
}

.channels_list_holder ul li a.channel_name,
.channels_list_holder ul li:not(.unread) .group_name,
.channels_list_holder ul li .im_name,
.channels_list_holder ul li .mpim_name,
.channels_list_holder ul li>a:link,
ts-message a.timestamp{
  color: #aaa !important;
}
#channels_scroller.show_which_channel_is_active ul li.active .im_name{
  color: #fff !important;
}

#msgs_div .unread_divider.no_unreads .divider_label
{
 background: #000 !important;
 color: #aaa !important;
}

#msgs_div .unread_divider.no_unreads hr{
  border-top-color: #888 !important;
}

.flexpane_redesign #member_mentions {
  background-color: var(--background);
}

#details_tab .channel_page_section {
  background-color: var(--background-elevated);
}

#details_tab .channel_page_section .section_title {
   color: var(--text);
}

.greigh {
   /* greigh = label?? */
   color: var(--text) !important;
}

.pinned_item .pin_member_name a, .pinned_item {
     color: var(--text) !important;
}

.pinned_item .pinned_message_text .pin_truncate_fade {
   background: -webkit-gradient(linear,left bottom,left top,color-stop(0,var(--background-elevated)),color-stop(1,rgba(255,255,255,0)));
}

.tab_container .file_list_item .contents .member, .tab_container .file_list_item .contents .service_link, .tab_container .file_list_item .contents .share_info, .tab_container .file_list_item .contents .time {
   color: var(--text-special);
}

.tab_container .file_list_item:focus, .tab_container .file_list_item:hover {
   background-color: var(--background-hover);
}

/* files */
.file_container.generic_container .file_header_meta .meta_hover {
   background-color: transparent !important;
}

.file_preview_action.btn.ts_tip, .file_preview_link.btn.file_comment_link {
   border: 1px solid var(--border-bright) !important;
   background-color: var(--background-hover) !important;
   color: var(--text) !important;
}
.file_preview_action.btn.ts_tip:hover, .file_preview_link.btn.file_comment_link:hover {
   background-color: var(--background) !important;
}

/* user profile popup */
#member_preview_scroller, #member_preview_web_container,
.menu_member_header, .menu_member_footer {
   background-color: var(--background-elevated);
   border-color: var(--border-dim);
   color: var(--text);
}

/* user mentions for other people */
.app_preview_link_slug.ts_tip,
.internal_member_link.ts_tip,
.internal_user_group_link.ts_tip,
ts-mention.ts_tip
{
   color: var(--text-bright);
   background: var(--background-elevated);
   border: 1px solid var(--border-dim);
   padding: 2px 4px;
   margin: 2px;
   border-radius: 10px;
}
.app_preview_link_slug.ts_tip:hover,
.internal_member_link.ts_tip:hover,
.internal_user_group_link.ts_tip:hover,
ts-mention.ts_tip:hover
{
   color: var(--text-bright) !important;
   border: 1px solid var(--border-bright);
}

/* emojis */
.rxn[data-emoji] {
   /*background-color: var(--background-light) !important;
   transition: background-color 200ms ease-in;*/
   height: 28px;
}

.rxn[data-emoji]:hover {
   /*background-color: var(--background-bright) !important;*/
}

.rxn[data-emoji] .emoji_rxn_count {
   font-size: 0.9rem;
   /*color: black !important;*/
}

.rxn .emoji-sizer {
  background-color: transparent !important;
  border-radius: 7px;
  width: 24px;
  height: 24px;
  margin: 0 0 0 -2px !important;
  border: 1px solid transparent; /* looks silly but it makes the outline work */
}

.emoji-sizer {
   /* outline for black-on-transparent emojis */
   -webkit-filter: drop-shadow( 1px  0 0 var(--background-bright))
                   drop-shadow(-1px  0 0 var(--background-bright))
                   drop-shadow(-0  1px 0 var(--background-bright))
                   drop-shadow( 0 -1px 0 var(--background-bright));
   margin: 0 !important;
}

.ts_icon.ts_icon_smile_o {
   color: var(--text);
}

.emoji_menu_ng #emoji_input_container,
#emoji_menu #emoji_menu_items_scroller,
#emoji_menu #emoji_menu_footer,
#emoji_menu #emoji_input_container {
   background-color: transparent;
}

.menu .p-emoji_picker__input_container,
.menu .p-emoji_picker__list_container,
.menu .p-emoji_picker__heading,
.menu .p-emoji_picker__footer {
   background: transparent;
   color: var(--text);
}

.p-emoji_picker__group_tab {
   border: 1px solid transparent;
   border-bottom-width: 2px;
}

.menu .p-emoji_picker__group_tab--active {
   background-color: var(--background);
   color: var(--text-special);
   border-color: var(--border-bright);
   border-width: 1px 1px 2px 1px;
   border-style: solid;
}
.p-emoji_picker__group_tab:hover {
   background-color: var(--background-elevated);
   border-color: var(--border-dim);
}
.p-emoji_picker__group_tab .emoji-sizer {
   filter: none;
   -webkit-filter: none;
}
.p-emoji_picker__group_tab:hover .emoji-sizer {
   color: var(--text);
}
.p-emoji_picker__preview_text {
   background-color: var(--bacground-elevated);
   color: var(--text);
}

#emoji_menu h3, #emoji_menu #emoji_preview_text {
   background-color: var(--background-elevated);
   color: var(--text);
}

#emoji_menu a.emoji_grouping_tab .emoji-sizer {
   -webkit-filter: none;
}

.emoji_menu_ng #emoji_menu_header .emoji_grouping_tab.active {
   background-color: transparent;
   border-color: var(--border-bright);
   border-width: 1px 1px 3px 1px;
   border-style: solid;
}

.light_theme .emoji-only {
   line-height: 3rem;
   font-size: 3rem;
   margin-top: 3px !important;
}

/* menus */
.menu ul li a, .menu ul li:not(.disabled) a {
   border: 1px solid var(--background-elevated) !important;
}

.menu ul li.highlighted a, .menu ul li:hover:not(.disabled) a {
   background: var(--background-elevated) !important;
   border-color: var(--border-bright) !important;
}

.menu .section_header .header_label {
  color: var(--text) !important;
  background-color: var(--background-elevated) !important;
}

.menu .section_header hr {
  border-color: transparent;
}

/* threads */
ts-message .reply_bar:hover {
  background: var(--background) !important;
  border: 1px solid var(--border-dim) !important;
}
/* editor in thread reply */
#convo_tab .message_input, #convo_tab textarea#msg_text {
   color: var(--text) !important;
}
.inline_message_input_container .ql-container.focus,
.inline_message_input_container .ql-container:active {
   border-color: var(--border-dim) !important;
}
#file_reply_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container,
#reply_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container,
.reply_input_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container,
#convo_tab #convo_tab_header {
   color: var(--text) !important;
}

/* other */
.special_formatting_quote .quote_bar {
   background: var(--border-bright) !important;
}

#details_toggle.active:hover, #recent_mentions_toggle.active:hover,
#stars_toggle.active:hover {
   background-color: var(--background-hover);
   color: var(--text);
}

#details_toggle.active, #recent_mentions_toggle.active,
#sli_recap_toggle.active, #stars_toggle.active {
  background-color: var(--background-elevated);
  border: 1px solid var(--border-bright);
  color: var(--border-bright);
}

.star_item,
.current_status_input_for_team_menu .current_status_presets {
   border-color: var(--border-dim);
}

#archives_return, .messages_banner {
   color: var(--text);
   background-color: var(--background-elevated);
   border: 1px solid var(--border-bright);
   border-bottom: 0px;
   border-radius: 10px 10px 0 0;
}

#threads_msgs_scroller_div, ts-thread {
   background-color: var(--background);
}

ts-thread .thread_header .thread_channel_name a {
   color: var(--text-special);
}

#convo_tab .thread_participants, ts-thread .thread_participants {
   color: var(--text);
}

ts-thread .thread_messages,
.reply_input_container .ql-container {
   background-color: var(--background);
   border-color: var(--border-dim);
}

#threads_msgs_scroller_div ts-thread ts-message {
   margin: 0 !important;
   border-radius: 10px;
}

ts-thread .collapse_inline_thread_container:hover,
ts-thread .view_all_replies_container:hover {
   background-color: var(--background-elevated);
}


/* preferences page */
#fs_modal, .modal, .modal-header, .modal-footer {
   background-color: var(--background-elevated);
}

#fs_modal, #fs_modal h1, #fs_modal h2,
#fs_modal h3, #fs_modal h4, #fs_modal h5,
.modal, .modal h1, .modal h2, .modal h3,
.modal h4, .modal h5 {
   color: var(--text);
}

#fs_modal .fs_modal_file_viewer_header {
   background: transparent;
}
#fs_modal .fs_modal_file_viewer_content .viewer {
   background: var(--background);
}
.fs_modal_file_viewer_header .control_btn {
   color: var(--text) !important;
}

.section_rollup:hover:not(.is_active) {
   background: var(--background-hover);
   color: inherit;
}

#fs_modal #fs_modal_sidebar a {
  padding: 10px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.01);
  border-radius: 10px;
}

#fs_modal #fs_modal_sidebar a:hover {
  border-color: var(--border-dim);
}

#fs_modal #fs_modal_sidebar a.is_active {
  border-color: var(--border-bright);
}


#threads_msgs_scroller_div .threads_caught_up_divider .divider_line,
#threads_msgs_scroller_div .threads_caught_up_divider .divider_label {
   background-color: var(--background-elevated);
   border: 1px solid var(--border-dim);
   color: var(--text);
}

/* unreads */
.unread_empty_state {
   color: var(--text);
}

.unread_group_header,
.sli_briefing, .sli_briefing__header, .sli_briefing__title,
.sli_briefing_view__footer_title, .bottom_mark_all_read {
   background-color: var(--background);
   color: var(--text);
   border-color: var(--border-dim);
}
.unread_group_header button {
   color: var(--text-special);
},


/* scroller for threads & unreads */
#threads_msgs_scroller_div:not(.loading):before {
   background: var(--background);
}

/* putting this on so many elements might cause performance issues but #yolo */
div::-webkit-scrollbar-track {
  display: none !important;
}
div::-webkit-scrollbar-thumb {
   color: transparent !important;
   border: 1px solid var(--scrollbar-border) !important;
   background-color: transparent !important;
}

#threads_msgs_scroller_div:not(.loading):before {
   background: none;
}

/* thread side panel */

#mentions_scroller {
   background: var(--background) !important;
   color: var(--text) !important;
}


/* global (left sidebar) */

#channel_scroll_down, #channel_scroll_up {
   background-color: var(--background) !important;
   border: 0 1px 1px 1px solid var(--border-bright) !important;
}

#team_menu, #quick_switcher_btn, #team_menu_overlay, #col_channels_overlay {
   border-color: transparent !important;
}

/* CodeMirror syntax highlighting */
.cm-s-default .cm-header {color: #66f}
.cm-s-default .cm-quote {color: #0f0}
.cm-negative {color: #f44}
.cm-positive {color: #2f2}
.cm-s-default .cm-keyword {color: #f0a}
.cm-s-default .cm-atom {color: #7ff}
.cm-s-default .cm-number {color: #5fa}
.cm-s-default .cm-def {color: #37f}
.cm-s-default .cm-variable-2 {color: #09f}
.cm-s-default .cm-variable-3 {color: #0fa}
.cm-s-default .cm-comment {color: #f80}
.cm-s-default .cm-string {color: #f33}
.cm-s-default .cm-string-2 {color: #f50}
.cm-s-default .cm-meta,.cm-s-default .cm-qualifier {color: #aaa}
.cm-s-default .cm-builtin {color: #96f}
.cm-s-default .cm-bracket {color: #ffa}
.cm-s-default .cm-tag {color: #5f0}
.cm-s-default .cm-attribute {color: #33f}
.cm-s-default .cm-hr {color: #ccc}
.cm-s-default .cm-link {color: #33f}

/* Snippets */
select {
   background-color: var(--background);
   color: var(--text);
   border-color: var(--border-dim);
}

.CodeMirror, .CodeMirror .CodeMirror-gutters, .CodeMirror-gutter {
   background-color: var(--background) !important;;
   border-color: var(--border-bright);
   color: var(--text);
}

.CodeMirror .CodeMirror-line {
   background-color: var(--background);
}

.CodeMirror-cursor {
   border-left-color: var(--text);
}

.CodeMirror-selected {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

.modal div, .modal span, .modal label {
  color: var(--text);
}

.lazy_filter_select .lfs_list_container,
.lazy_filter_select .lfs_list .lfs_item.active {
  background-color: var(--background-elevated);
}

.lfs_list::-webkit-scrollbar-track {
  display: none;
}

.lfs_list::-webkit-scrollbar-thumb {
   color: transparent !important;
   border: 1px solid var(--scrollbar-border) !important;
   background-color: transparent !important;
}

/* profile */
#fs_modal #fs_modal_footer {
   background-color:var(--background-elevated)
}

#contents_container::-webkit-scrollbar-track {
  display: none;
}

#contents_container::-webkit-scrollbar-thumb {
   color: transparent !important;
   border: 1px solid var(--scrollbar-border) !important;
   background-color: transparent !important;
}

/* scroll border fix */
.client_channels_list_container {
   border-right: none;
}

.flex_pane_showing #col_flex {
   border-color: var(--border-dim);
}

/* setting menu fix */
#fs_modal.prefs_modal .global_notification_block {
   background: transparent;
   border: none;
}
#fs_modal.prefs_modal .global_notification_block.selected {
   background: transparent;
   border: 1px solid var(border-bright);
}
.notification_example.mac {
  color: #555459; /* default color - leave unthemed */
}

/* global jumper */
ts-jumper, ts-jumper.active {
  background-color: rgba(32,32,32,0.6);
}
ts-jumper ts-jumper-container {
  box-shadow: 0 5px 20px rgba(0,0,0,1);
}
