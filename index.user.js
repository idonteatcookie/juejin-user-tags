// ==UserScript==
// @name         掘金用户标签管理
// @name:en      Juejin User Tag Manager
// @namespace    https://github.com/idonteatcookie/juejin-user-tags
// @version      1.0.0
// @description  为掘金用户添加标签功能，支持点赞和点踩标记，让您更好地管理关注的用户
// @description:en Add tag functionality for Juejin users, support like and dislike marking
// @author       我不吃饼干
// @match        https://juejin.cn/*
// @match        https://*.juejin.cn/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @license      MIT
// @homepage     https://github.com/idonteatcookie/juejin-user-tags
// @supportURL   https://github.com/idonteatcookie/juejin-user-tags/issues
// @updateURL    https://github.com/idonteatcookie/juejin-user-tags/raw/main/index.user.js
// @downloadURL  https://github.com/idonteatcookie/juejin-user-tags/raw/main/index.user.js
// @icon         data:image/png;base64,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
// ==/UserScript==

(function () {
  'use strict';

  // ==================== 常量定义 ====================
  const CONFIG = {
    USER_TAGS_KEY: 'juejin_userTags',
    USERNAME_UUID_MAP_KEY: 'juejin_usernameUuidMap',
    SELECTORS: {
      ARTICLE_ITEMS: '.entry-list>.item',
      COMMENT_ITEMS: '.comment-wrapper, .reply-wrapper',
      USER_INFO_AREA: '.user-info-block, .user-info, .profile-info',
      USER_LINK: 'a[href*="/user/"]',
    },
    THEMES: {
      LIKE: {
        PRIMARY: '#ff4d4f',
        SECONDARY: '#ffe6e6',
        BORDER: '#ff4d4f',
        TEXT: '#ff4d4f',
        TAG_BACKGROUND: 'rgb(255 77 79 / 20%)',
      },
      DISLIKE: {
        PRIMARY: '#52c41a',
        SECONDARY: '#f6ffed',
        BORDER: '#52c41a',
        TEXT: '#52c41a',
        TAG_BACKGROUND: 'rgb(82 196 26 / 20%)',
      },
    },
    STYLES: {
      MODAL_OVERLAY: `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5); z-index: 100;
        display: flex; justify-content: center; align-items: center;
      `,
      TAG_STAMP_BASE: `
        border-radius: 50%; transform: rotateZ(-30deg);
        display: flex; justify-content: center; align-items: center;
        font-family: cursive; font-weight: 900;
        word-break: break-all; line-height: 1.2; 
        padding: 5px; box-sizing: border-box;
      `,
    },
  };

  // ==================== 数据存储模块 ====================
  class StorageManager {
    static getUserTags() {
      return GM_getValue(CONFIG.USER_TAGS_KEY, {});
    }

    static saveUserTags(userTags) {
      GM_setValue(CONFIG.USER_TAGS_KEY, userTags);
    }

    static getUsernameUuidMap() {
      return GM_getValue(CONFIG.USERNAME_UUID_MAP_KEY, {});
    }

    static saveUsernameUuidMap(usernameUuidMap) {
      GM_setValue(CONFIG.USERNAME_UUID_MAP_KEY, usernameUuidMap);
    }
  }

  // ==================== DOM 工具模块 ====================
  class DOMUtils {
    static createElement(tag, options = {}) {
      const element = document.createElement(tag);
      if (options.className) element.className = options.className;
      if (options.id) element.id = options.id;
      if (options.style) element.style.cssText = options.style;
      if (options.innerHTML) element.innerHTML = options.innerHTML;
      if (options.textContent) element.textContent = options.textContent;
      return element;
    }

    static setRelativePosition(element) {
      if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
      }
    }

    static extractUserIdFromHref(href) {
      const match = href.match(/\/user\/(\d+)/);
      return match ? match[1] : null;
    }

    static isUserPage() {
      return window.location.pathname.match(/^\/user\/(\d+)/);
    }

    static getTagTheme(tagType) {
      // 根据标签类型判断主题
      return tagType === 'like' ? CONFIG.THEMES.LIKE : CONFIG.THEMES.DISLIKE;
    }
  }

  // ==================== 标签戳渲染模块 ====================
  class TagStampRenderer {
    static createStampContainer(position, size = 'normal') {
      const styles = {
        normal: 'gap: 5px; flex-direction: column;',
        small: 'gap: 3px; flex-direction: row;',
        userPage: 'gap: 3px;',
      };

      return DOMUtils.createElement('div', {
        className: 'user-tag-stamp',
        style: `
          position: absolute; z-index: 99; display: flex;
          pointer-events: none; ${position} ${styles[size] || styles.normal}
        `,
      });
    }

    static createTagStamp(tagData, size = 'normal') {
      const sizes = {
        normal: {
          width: '80px',
          height: '80px',
          fontSize: '20px',
          borderWidth: '2px',
        },
        small: {
          width: '50px',
          height: '50px',
          fontSize: '12px',
          borderWidth: '1px',
        },
        userPage: {
          width: '100px',
          height: '100px',
          fontSize: '20px',
          borderWidth: '4px',
        },
      };

      const sizeStyle = sizes[size] || sizes.normal;
      const theme = DOMUtils.getTagTheme(tagData.type);

      return DOMUtils.createElement('div', {
        textContent: tagData.text,
        style: `
          ${CONFIG.STYLES.TAG_STAMP_BASE}
          width: ${sizeStyle.width}; height: ${sizeStyle.height};
          font-size: ${sizeStyle.fontSize};
          border: ${sizeStyle.borderWidth} double ${theme.BORDER};
          color: ${theme.TEXT};
          background: ${theme.TAG_BACKGROUND};
          ${
            size === 'userPage'
              ? 'transform: translate(-50%, -50%) rotateZ(-30deg);'
              : ''
          }
        `,
      });
    }

    static addTagsToElement(element, userId, position, size = 'normal') {
      const userTags = StorageManager.getUserTags();
      const userTagData = userTags[userId];

      if (!userTagData || !userTagData.tags || userTagData.tags.length === 0)
        return;

      // 移除已存在的标签戳
      const existingStamp = element.querySelector('.user-tag-stamp');
      if (existingStamp) existingStamp.remove();

      const stampContainer = this.createStampContainer(position, size);

      userTagData.tags.forEach((tagData) => {
        const tagStamp = this.createTagStamp(tagData, size);
        stampContainer.appendChild(tagStamp);
      });

      DOMUtils.setRelativePosition(element);
      element.appendChild(stampContainer);
    }
  }

  // ==================== 弹窗模块 ====================
  class ModalManager {
    static showTagModal(userId, defaultTag, isLike) {
      const theme = isLike ? CONFIG.THEMES.LIKE : CONFIG.THEMES.DISLIKE;
      const modal = this.createModal(defaultTag, theme);
      document.body.appendChild(modal);

      this.bindModalEvents(modal, userId, defaultTag, isLike);
    }

    static createModal(defaultTag, theme) {
      return DOMUtils.createElement('div', {
        style: CONFIG.STYLES.MODAL_OVERLAY,
        innerHTML: `
          <div style="background: white; padding: 20px; border-radius: 8px; width: 300px; border: 2px solid ${theme.PRIMARY};">
            <div style="margin: 15px 0;">
              <input type="text" id="tagInput" value="${defaultTag}" 
                style="width: 100%; padding: 8px; border: 2px solid ${theme.PRIMARY}; border-radius: 4px; box-sizing: border-box; outline: none; transition: all 0.3s ease;">
            </div>
            <div style="text-align: right; margin-top: 20px;">
              <button id="cancelButton" style="background: #f5f5f5; color: #666; border: 1px solid #ddd; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-right: 10px; transition: all 0.3s ease;">取消</button>
              <button id="confirmButton" style="background: ${theme.PRIMARY}; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 4px ${theme.PRIMARY}40;">确定</button>
            </div>
          </div>
        `,
      });
    }

    static bindModalEvents(modal, userId, defaultTag, isLike) {
      const confirmButton = modal.querySelector('#confirmButton');
      const cancelButton = modal.querySelector('#cancelButton');
      const tagInput = modal.querySelector('#tagInput');

      // 添加按钮悬停效果
      confirmButton.onmouseover = () => {
        confirmButton.style.transform = 'translateY(-1px)';
        confirmButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      };
      confirmButton.onmouseout = () => {
        confirmButton.style.transform = 'translateY(0)';
        confirmButton.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      };

      cancelButton.onmouseover = () => {
        cancelButton.style.background = '#e8e8e8';
      };
      cancelButton.onmouseout = () => {
        cancelButton.style.background = '#f5f5f5';
      };

      confirmButton.onclick = () => {
        const tag = tagInput.value.trim();
        if (tag) {
          const userTags = StorageManager.getUserTags();
          // 保存标签和类型信息
          userTags[userId] = {
            tags: [
              {
                text: tag,
                type: isLike ? 'like' : 'dislike',
              },
            ],
          };
          StorageManager.saveUserTags(userTags);
          document.body.removeChild(modal);

          // 触发标签重新显示
          window.dispatchEvent(new CustomEvent('tagsUpdated'));
        }
      };

      cancelButton.onclick = () => document.body.removeChild(modal);

      modal.onclick = (e) => {
        if (e.target === modal) document.body.removeChild(modal);
      };

      tagInput.onkeypress = (e) => {
        if (e.key === 'Enter') confirmButton.click();
      };

      // 输入框获得焦点
      setTimeout(() => tagInput.focus(), 100);
    }
  }

  // ==================== 用户页面按钮模块 ====================
  class UserPageButtons {
    static addToUserPage(userId) {
      setTimeout(() => {
        const userInfoArea = document.querySelector(
          CONFIG.SELECTORS.USER_INFO_AREA
        );
        if (userInfoArea && !document.querySelector('#userTagButtons')) {
          const buttonContainer = this.createButtonContainer();
          userInfoArea.appendChild(buttonContainer);
          this.bindButtonEvents(buttonContainer, userId);
        }
      }, 1000);
    }

    static createButtonContainer() {
      const container = DOMUtils.createElement('div', {
        id: 'userTagButtons',
        style:
          'z-index: 99;position: absolute;left: 330px;top: 10px;display: flex; gap: 10px;',
      });

      const likeButton = this.createButton('👍🏻 大佬', CONFIG.THEMES.LIKE);
      const dislikeButton = this.createButton(
        '👎🏻 笨比',
        CONFIG.THEMES.DISLIKE
      );

      container.appendChild(likeButton);
      container.appendChild(dislikeButton);
      return container;
    }

    static createButton(text, theme) {
      return DOMUtils.createElement('button', {
        textContent: text,
        style: `
          background: ${theme.PRIMARY}; 
          color: white; 
          border: 2px solid ${theme.PRIMARY}; 
          padding: 8px 16px; 
          border-radius: 6px; 
          cursor: pointer;
          font-size: 14px; 
          font-weight: 600;
          display: flex; 
          align-items: center;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px ${theme.PRIMARY}40;
        `,
      });
    }

    static bindButtonEvents(container, userId) {
      const buttons = container.querySelectorAll('button');

      // 为按钮添加悬停效果
      buttons.forEach((button, index) => {
        const theme = index === 0 ? CONFIG.THEMES.LIKE : CONFIG.THEMES.DISLIKE;

        button.onmouseover = () => {
          button.style.background = theme.SECONDARY;
          button.style.color = theme.PRIMARY;
          button.style.transform = 'translateY(-2px)';
          button.style.boxShadow = `0 4px 8px ${theme.PRIMARY}60`;
        };

        button.onmouseout = () => {
          button.style.background = theme.PRIMARY;
          button.style.color = 'white';
          button.style.transform = 'translateY(0)';
          button.style.boxShadow = `0 2px 4px ${theme.PRIMARY}40`;
        };
      });

      buttons[0].onclick = () =>
        ModalManager.showTagModal(userId, '大佬', true);
      buttons[1].onclick = () =>
        ModalManager.showTagModal(userId, '笨比', false);
    }
  }

  // ==================== 标签显示模块 ====================
  class TagDisplayManager {
    constructor() {
      this.processedElements = new WeakSet();
      this.isProcessing = false;
    }

    displayAllTags() {
      if (this.isProcessing) return;
      this.isProcessing = true;

      try {
        this.displayArticleListTags();
        this.displayCommentTags();
        this.displayUserPageTags();
      } finally {
        this.isProcessing = false;
      }
    }

    displayArticleListTags() {
      const articleItems = document.querySelectorAll(
        CONFIG.SELECTORS.ARTICLE_ITEMS
      );

      articleItems.forEach((articleItem) => {
        if (this.processedElements.has(articleItem)) return;

        const userLink = articleItem.querySelector(CONFIG.SELECTORS.USER_LINK);
        if (userLink) {
          const userId = DOMUtils.extractUserIdFromHref(
            userLink.getAttribute('href')
          );
          if (userId) {
            TagStampRenderer.addTagsToElement(
              articleItem,
              userId,
              'top: 50%; left: 50%; transform: translate(-50%, -50%);',
              'normal'
            );
            this.processedElements.add(articleItem);
          }
        }
      });
    }

    displayCommentTags() {
      const commentItems = document.querySelectorAll(
        CONFIG.SELECTORS.COMMENT_ITEMS
      );

      commentItems.forEach((commentItem) => {
        if (this.processedElements.has(commentItem)) return;

        const userLink = commentItem.querySelector(CONFIG.SELECTORS.USER_LINK);
        if (userLink) {
          const userId = DOMUtils.extractUserIdFromHref(
            userLink.getAttribute('href')
          );
          if (userId) {
            TagStampRenderer.addTagsToElement(
              commentItem,
              userId,
              'top: 10px; left: 20px;',
              'small'
            );
            this.processedElements.add(commentItem);
          }
        }
      });
    }

    displayUserPageTags() {
      const userPageMatch = DOMUtils.isUserPage();
      if (userPageMatch) {
        const userId = userPageMatch[1];
        const userInfoArea = document.querySelector(
          CONFIG.SELECTORS.USER_INFO_AREA
        );
        if (userInfoArea) {
          TagStampRenderer.addTagsToElement(
            userInfoArea,
            userId,
            'top: 50%; left: 50%;',
            'userPage'
          );
        }
      }
    }
  }

  // ==================== 页面监听模块 ====================
  class PageObserver {
    constructor(tagDisplayManager) {
      this.tagDisplayManager = tagDisplayManager;
      this.init();
    }

    init() {
      this.observePageChanges();
      this.addEventListeners();
    }

    observePageChanges() {
      const observer = new MutationObserver((mutations) => {
        let shouldUpdate = false;

        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              if (this.shouldUpdateTags(node)) {
                shouldUpdate = true;
              }
            }
          });
        });

        if (shouldUpdate) {
          setTimeout(() => this.tagDisplayManager.displayAllTags(), 300);
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
    }

    shouldUpdateTags(node) {
      return (
        !node.classList?.contains('user-tag-stamp') &&
        !node.querySelector?.('.user-tag-stamp') &&
        (node.querySelector?.(CONFIG.SELECTORS.USER_LINK) ||
          node.matches?.(CONFIG.SELECTORS.USER_LINK) ||
          node.classList?.contains('entry') ||
          node.classList?.contains('comment-item'))
      );
    }

    addEventListeners() {
      window.addEventListener('tagsUpdated', () => {
        setTimeout(() => this.tagDisplayManager.displayAllTags(), 100);
      });
    }
  }

  // ==================== 主控制器 ====================
  class JuejinUserTagManager {
    constructor() {
      this.tagDisplayManager = new TagDisplayManager();
      this.pageObserver = new PageObserver(this.tagDisplayManager);
      this.init();
    }

    init() {
      this.addTagButtons();
      this.tagDisplayManager.displayAllTags();
      this.addStyles();
    }

    addTagButtons() {
      const userPageMatch = DOMUtils.isUserPage();
      if (userPageMatch) {
        const userId = userPageMatch[1];
        UserPageButtons.addToUserPage(userId);
      }
    }

    addStyles() {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes tagFadeIn {
          from { opacity: 0; transform: scale(0.5) rotate(-180deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .user-tag-stamp { transition: all 0.3s ease; }
        .user-tag-stamp:hover { transform: scale(1.05); }
      `;
      document.head.appendChild(style);
    }
  }

  // ==================== 初始化 ====================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new JuejinUserTagManager();
    });
  } else {
    new JuejinUserTagManager();
  }
})();
