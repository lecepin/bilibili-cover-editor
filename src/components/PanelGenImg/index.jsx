import React from "react";
import html2canvas from "html2canvas";
import { Button, Modal, message } from "antd";

import "antd/lib/button/style/index.css";
import "antd/lib/modal/style/index.css";
import "antd/lib/message/style/index.css";

class PanelGenImg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
  }

  handleOpenDialog() {
    const { ctx } = this.props;
    const hideMsg = message.loading("生成中……");
    const canvasDOM = document.getElementById(ctx.get("canvas").containerId);

    // bilibili pading
    const canvasWidth = canvasDOM.offsetWidth;
    const canvasHeight = canvasDOM.offsetHeight;
    const ratio = 2917 / canvasWidth;
    const canvasParentDom = canvasDOM.parentElement;

    canvasParentDom.style.padding = `${80 / ratio}px ${218 / ratio}px`;
    canvasParentDom.style.width = canvasWidth + "px";
    canvasParentDom.style.height = canvasHeight + "px";
    canvasParentDom.style.boxSizing = "content-box";

    html2canvas(
      document.getElementById(ctx.get("canvas").containerId).parentElement,
      {
        allowTaint: true,
        useCORS: true,
        scale: 4,
      }
    )
      .then((canvas) => {
        canvasParentDom.style = "";
        hideMsg();
        this.setState(
          {
            visible: true,
          },
          () => {
            this.refPreview.src = canvas.toDataURL();

            this.refDownloadA.href = this.refPreview.src;
            this.refDownloadA.download = Date.now() + ".png";
          }
        );
      })
      .finally(() => {
        // 触发 selectGhost 计算位置
        window.document.body.click();
      });
  }

  handleCloseDialog() {
    this.setState({
      visible: false,
    });
  }

  handleDownload() {
    this.refDownloadA.click();
  }

  render() {
    const { ctx } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Button type="primary" onClick={this.handleOpenDialog}>
          生成图片
        </Button>

        <Modal
          title="生成图片"
          visible={visible}
          onCancel={this.handleCloseDialog}
          maskClosable={false}
          footer={[
            <Button type="primary" onClick={this.handleDownload} key="1">
              下载图片
            </Button>,
          ]}
        >
          <a ref={(_) => (this.refDownloadA = _)}></a>
          <img
            style={{ width: "100%", border: "1px dashed " }}
            ref={(_) => (this.refPreview = _)}
          />
        </Modal>
      </div>
    );
  }
}

export default PanelGenImg;
