
questions = ['should you subscribe', 'is python a good language', 'is php a fun languiage', 'is 1+1=4']
answers = ['yes', 'no', 'yes', 'yes']
def quizGame():
    score = 0
    for i in range(len(questions)):
        print(questions[i])
        ans = input('put your answer\n')

        if ans == answers[i]:
            print('COORECT')
            score+=1
        else:
            print('WRONG ANSWER')

    print(f'Your final Score is : {score}')
    print(type(4.5))
quizGame()