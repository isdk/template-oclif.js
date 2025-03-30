import {Args, Command, Flags} from '@oclif/core'

export default class HelloCommand extends Command {
  static aliases = ['']
  static args = {
    say: Args.string({description: 'what to say', required: true}),
  }
  static description = '{{description}}'
  static examples = [
    `<%= config.bin %> <%= command.id %> .
Appied. Enjoy your project at "."
`,
  ]
  static flags = {
    data: Flags.string({char: 'd', description: 'the data'}),
    interactive: Flags.boolean({char: 'i', description: 'interactive mode', default: true, allowNo: true}),
    dryRun: Flags.boolean({char: 'n', description: 'dry run mode'}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(HelloCommand)
    const content = args.say
    const data = flags.data
    this.log(`say: ${content}`, data)
  }
}
