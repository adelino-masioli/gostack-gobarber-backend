import IEmailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

interface IMessage {
  to: string;
  body: string;
}

class FakeEmailProvider implements IEmailProvider {
  private messages: IMessage[] = [];
  public async sendMail(to: string, body: string): Promise<void> {
    this.messages.push({
      to,
      body,
    });
  }
}

export default FakeEmailProvider;
