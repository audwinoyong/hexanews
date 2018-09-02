/**
 * Profile container contains all description of current user
 */

import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { map } from 'lodash'

import avatarPlaceholder from '../../assets/avatar_placeholder.png'
import ProfileCard from '../../components/profileCard/ProfileCard'
import styles from './styles'
import { profileString } from '../../constants/string'
import selector, { StateProps } from './selector'
import { Article } from '../../domain/model/Article'

type Props = {
  dispatch: Dispatch<any>
} & StateProps

class Profile extends React.Component<Props> {

  renderAvatar = () => {
    return <Avatar style={styles.avatar}>HC</Avatar>
  }

  public render() {
    const { dispatch, userArticles } = this.props
    return (
      <div style={styles.container}>
        <ProfileCard
          name='Hillary Clinton'
          description='A politician, writer and philanthropist.'
          image={avatarPlaceholder}
        />
        <Button
          variant='outlined'
          size='small'
          component='button'
          style={styles.button}
          onClick={() => dispatch(push('/account'))}
        >
          {profileString.myAccount}
        </Button>
        <Divider style={styles.profileDivider} />
        <Grid container spacing={24}>
          <Grid item xs={12} style={styles.articleContainer}>
            {map(userArticles, (article: Article) => (
              <Card style={styles.card}>
                <CardHeader
                  avatar={this.renderAvatar()}
                  title='Hillary Clinton'
                  subheader='20 August 2018'
                />
                <CardContent>
                  <Typography gutterBottom variant='headline' component='h2'>
                    {article.title}
                  </Typography>
                  <Typography component='p'>
                    {article.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </div >
    )
  }
}

export default connect(selector)(Profile)
